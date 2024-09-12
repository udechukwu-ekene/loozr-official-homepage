import React from "react";
import NFT from "../components/SingleNFT";
import { nfts } from "../components/dummy/nfts";

const Nfts = () => {

  const [active, setActive] = React.useState()
  const [ playing, setPlaying ] = React.useState();

  const nftype = ""

  return (
    <div className="w-full mt-8 md:mt-0 pb-28">
      <p className="text-white md:px-0 px-6 text-[17px] leading-7 font-medium md:font-medium mb-7">
        Music NFT drops
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8">
        {nfts.map(({ album, artist, song, platform, price, liked, likes, token, img }, index) => (
          <NFT
            key={index}
            {...{ album, artist, song, platform, price, liked, likes, token, img, index, playing, setPlaying, active, setActive, nftype }}
          />
        ))}
      </div>
    </div>
  );
};

export default Nfts;
