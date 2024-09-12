import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATOR_COIN_DOMAIN } from "../config/constants";
import * as yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { TOAST_OPTIONS } from "../config/constants";
import { useArtisteSetupCallback } from "../state/artist/hooks";
import { jsonToArtist } from "../utils";
import { toastHttpError } from "../utils/httpHelper";
import { useDispatch } from "react-redux";
import { updateProfile } from "../state/user/userReducer";
import TipImg from "../assets/icons/tooltip.svg";
import AccountSetupInput from "../components/AccountSetupInput";
import AccountSetupInputCoin from "../components/AccountSetupInputCoin";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const LaunchToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("")
  const [number, setNumber] = useState()
  const { handleArtisteSetup } = useArtisteSetupCallback();
  const [isAccountAvailable, setAvailableState] = useState(false);
  const [isLoading, setLoader] = useState<boolean>(false);


  const longText = `When someone purchases your coin, a percentage of that gets allocated to you as a founder reward.

A value of 0% means you get no money when someone buys, whereas a value of 100% means that no one else can ever get coins because 100% of every purchase goes to you.

Setting this value too high will discourage buyers from ever purchasing your coin. It's a delicate balance, so tread carefully or stick with the default.`;

  // const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  //   <Tooltip {...props} arrow classes={{ popper: className }} />
  //     ))(({ theme }) => ({
  //       [`& .${tooltipClasses.arrow}`]: {
  //         color: theme.palette.common.black,
  //       },
  //       [`& .${tooltipClasses.tooltip}`]: {
  //         backgroundColor: "#141922",
  //         maxWidth: 320,
  //         paddingTop: 20,
  //         paddingBottom: 20,
  //         paddingLeft: 40,
  //         paddingRight: 40,
  //         fontSize: 14,
  //       },
  //     }));

  const formSchema = yup.object({
    account_id: yup.string().required("Please enter coin name"),
    founder_reward: yup
      .number()
      .max(100, 'Founder reward exceeded 100%')
      .min(1, 'Minimum allowed value is 1 percent')
      .typeError("Founder percentage must be in number format"),
  });

  const formik = useFormik({
    initialValues: { account_id: "", founder_reward: 0 },
    validationSchema: formSchema,
    onSubmit: () => { },
  });

  useEffect(() => {
    formik.setFieldValue("account_id", text)
  }, [text])

  const handleLaunchToken = async () => {
    if (!formik.dirty) {
      return;
    } else if (!formik.isValid) {
      return;
    }

    if (!isAccountAvailable) return;

    setLoader(true);

    try {
      const result = await handleArtisteSetup(formik.values);
      const artist = jsonToArtist(result);
      dispatch(updateProfile(artist.user));
      setLoader(false);

      toast.success("HOORAY! You have been registered as an artiste!", {
        ...TOAST_OPTIONS,
        autoClose: 10000,
      });
      navigate(`/:accountDomain`, { replace: true });
    } catch (err) {
      setLoader(false);
      toastHttpError(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="px-6 max-w-[520px] mx-auto">
        <p className="font-bold md:w-[400px] text-4xl md:text-4xl text-white mb-4 md:mb-4">
          Create Artiste Coin
        </p>
        <p className="text-sm md:w-[400px] md:text-[15px] mb-7">
          Launch you own cryptocurrency.
          <span className="mt-2.5">
            Enter a custom Artiste Token Symbol that will act as your currency
            that can be held, traded and exchanged for goods and services.
          </span>
        </p>
        <AccountSetupInputCoin
          accountDomain={`.${CREATOR_COIN_DOMAIN}`}
          name="account_id"
          placeholder="$YOUR_COIN_NAME"
          value={formik.values.account_id}
          setResult={(result) => setAvailableState(result)}
          onChange={formik.handleChange}
          onBlur={(e) => formik.handleBlur(e)}
          onFocus={() => formik.setFieldTouched("account_id", true, true)}
        />
        <div className="w-full h-auto mt-4 mb-1">
          {formik.touched.account_id && formik.errors.account_id && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "-8px" }}
            >
              {formik.errors.account_id}
            </motion.div>
          )}
        </div>
        {/* <p className="italic text-sm md:text-base text-muted mb-8 md:mb-5">
          Coin name: {formik.values.account_id}.{CREATOR_COIN_DOMAIN}
        </p> */}
        <div className="w-full mb-8">
          <div className=" mb-5 flex items-center " >
            <p className="text-sm font-medium text-muted mr-2">
              Set Founder Reward:
            </p>

            {/* <CustomWidthTooltip title={longText} className=" font-normal " arrow placement="top" > 
              <img className=" w-5 h-5 " src={TipImg} alt="tooltip" /> 
            </CustomWidthTooltip> */}
          </div>
          <input
            type="number"
            name="founder_reward"
            // onKeyPress={(e) => {
            //   if (e.key === "e" || e.key === "-" || e.key === "+") {
            //     e.preventDefault();
            //   }
            // }} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched("founder_reward", true, true)}
            className=" px-7 py-3 md:py-4 h-[55px] mt-2 md:h-[60px]  w-full md:w-[176px] bg-dark-800 text-sm placeholder:text-muted text-white"
            placeholder="100%"
            style={{ background: "#12161F" }}
          />
        </div>
        <div className="w-full h-auto pt-2">
          {formik.touched.founder_reward && formik.errors.founder_reward && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-xs font-Inter-SemiBold text-[#F25341]"
              style={{ marginTop: "-35px" }}
            >
              {formik.errors.founder_reward}
            </motion.div>
          )}
        </div>
        <button
          className=" md:w-[400px] h-[55px] md:h-[60px] text-white disabled:text-muted font-medium md:text-base bg-gradient-ld disabled:bg-dark-800 mb-11 w-full focus:outline-none"
          onClick={handleLaunchToken}
          disabled={isLoading || !isAccountAvailable}
        >
          {isLoading ? "Reserving username..." : "Reserve Coin Name"}
        </button>
      </div>
    </div>
  );
};

export default LaunchToken;