import React, { useState, useEffect, useRef } from 'react'
import MusicBar from '../components/MusicBar';
import useAudioPlayer from '../hooks/useAudioPlayer';
import Play from "../assets/svg/controls/play.svg"; 
import Hearts from "../assets/Hearts.svg"; 
import Headphone from "../assets/headphone.svg"; 
import share from "../assets/share.svg"; 
import { styled } from "@mui/material/styles";
import Goya from "../assets/img/artists/goya.png";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Pause from "../assets/svg/controls/pause.svg";
import graph from "../assets/graph.png";
import musicinfo from "../assets/musicinfo.png";
import Wavesurfer from "wavesurfer.js";
import { useNavigate } from 'react-router-dom'; 
import { nfts } from "../components/dummy/nfts"; 
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';

const data = [
    { name: "May", uv: 70000 },
    { name: "May", uv: 70000 },
    { name: "May", uv: 70000 },
    { name: "Feb", uv: 63000 },
    { name: "Jan", uv: 27000 },
    { name: "Mar", uv: 40000 },
    { name: "Apr", uv: 10000 },
    { name: "Jun", uv: 43000 },
    { name: "Dec", uv: 32000 },
  ];
  
export default function MusicInfo() {
 
    const [canPlay, setCanPlay]: any = useState();
    const [playing, setPlaying]= useState(false);;


  const waveform = useRef(null);

  const [index, setIndex] = React.useState(null)

  React.useEffect(() => { 
      let value = sessionStorage.getItem("music")+""
      setIndex(Number(value))
  }, []) 

  const playAudio = () => {
    // Check if the audio is already playing
    if (canPlay.isPlaying()) {
        canPlay.pause();
    } else {
        canPlay.play();
    }
  };  

    const navigate = useNavigate() 

    const ClickHandler =()=> {
        setPlaying(prev => !prev)
        playAudio()
    }

    const GoBack =()=> { 
        canPlay.stop();
        navigate("/feeds")
    }

    return (
        <div className='flex flex-col w-full h-full md:px-[169px] py-10 md:py-24   '> 
            <img src={musicinfo} alt="musicinfo" className=' absolute top-0 md:w-[600px] left-0 -z-10 ' />
            <button className=' w-10 h-10 md:w-16 md:h-16 rounded-full border-2 mb-6 ml-6 md:-mt-10 md:-ml-10 border-[#536079] flex justify-center items-center ' onClick={() => GoBack()}>
                <svg className=' w-[14px] h-[19px] ' width="14" height="19" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33838 1.37012C7.33838 1.37012 1.68541 5.24904 1.68541 7.00039C1.68541 8.75174 7.33838 12.6274 7.33838 12.6274" stroke="#536079" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div className='flex md:flex-row flex-col w-full h-full   ' >  
                
                <div className=' flex-1 h-full flex md:flex-row flex-col md:pr-8 ' >
                    <div className=' w-screen md:w-fit md:pr-10 flex flex-col items-center px-6' > 
                        <div className=' w-[250px] md:w-[250px] h-[250px] rounded-md ' >
                            <img src={!index ? Goya : nfts[index].img} alt="img" className=' w-full h-full object-cover  rounded-md  ' />
                        </div>
                    </div>
                    <div className=' w-full h-full md:mt-0 mt-6 px-6 md:px-0 ' >  
                        <div className=' flex items-center w-full mb-4 ' >
                            <button className=' w-16 h-16 rounded-full border-2 border-[#FFFFFF1A] flex justify-center items-center ' onClick={ClickHandler}> 
                                {playing ? (
                                    <img
                                    src={Pause}
                                    alt=""
                                    className=" cursor-pointer ml-1 w-7 h-8"
                                    />
                                ) : (
                                    <img
                                    src={Play}
                                    alt="" 
                                    className="cursor-pointer ml-1 w-7 h-9"
                                    />
                                )} 
                            </button>
                            <div className=' pl-6  ' >
                                <p className=' text-white text-sm font-medium  ' >{!index ? "Chiling good" : nfts[index].album}</p>
                                <p className=' text-white text-xl md:text-[35px] font-bold md:my-2 ' >{!index ? "Goya Menor" : nfts[index].artist}</p> 
                                <p className=' text-[#536079] font-medium  ' >≈ $0.2343 USD coin price</p>
                            </div>
                        </div>
                        <div className=' w-full md:pr-14 ' >  
		                    {/* <div id="waveform" />  */}
                            <MusicBar play={setCanPlay} song={"/song.mp3"} />
                        </div>
                        <div className=' mt-4 w-full md:pr-8 md:mb-20 mb-10 flex items-center justify-between ' >
                            <div className=' w-full flex items-center ' >
                                <div className=' w-11 h-11 md:w-[25px]  md:h-[25px] rounded-full bg-yellow-400 ' >
                                    
                                </div>
                                <p className=' ml-2 md:ml-3 font-semibold text-white text-sm ' >Stevio Roy</p>
                            </div>
                            <p className=' text-[#536079] text-xs w-56 font-medium  ' >4:37mins/1.3k listens</p>
                        </div>

                        <div className='  flex items-center' >
                            <button style={{  background: "linear-gradient(180deg, #8369F4 27.69%, #F039E2 178.46%)" }} className=' font-semibold w-[170px] h-[52px] flex justify-center items-center rounded-full text-white ' >Buy song coin</button>
                            <div className=' ml-7 w-20 flex items-center ' >
                                <img src={Hearts} alt="Hearts" className=' w-4 ' />
                                <p className=' text-[#536079] text-xs w-40 font-medium ml-2 ' >{!index ? '12.3' : nfts[index].likes}k</p>
                            </div>
                            <div className='  flex w-20 items-center ' >
                                <img src={Headphone} alt="Headphone" className=' w-4 ' />
                                <p className=' text-[#536079] text-xs w-40 font-medium ml-2 ' >4.8k</p>
                            </div>
                            <div className='  flex items-center ' >
                                <img src={share} alt="share" className=' w-4 ' /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full md:w-fit md:mt-0 mt-16  ' >
                    <div className=' w-full flex flex-col md:w-[300px] ' >
                        <p className=' text-[#536079] text-xl text-center font-medium' >$CENTURION Coin Chart</p>
                        {/* <p className=' text-[#fff] text-lg text-center font-bold mt-4 ' >80%</p>
                        <p className=' text-[#15FFAB] text-sm text-center font-bold' >80%</p>
                        <div className=' mt-8 md:mt-4 pr-10 '>  
                            <div className=' -mb-4 ' > 
                                <p className=' text-[#70707C] text-xs text-right font-medium' >24 june</p>
                                <p className=' text-[#70707C] text-xs text-right font-medium' >$39</p>
                            </div>
                            <img src={graph} alt="graph" className='w-full md:w-[300px] object-cover' />
                        </div> */}

                        <ResponsiveContainer width={300} height={120}>
                            <AreaChart
                                data={data}
                                margin={{ top: 20, right: 30, left: 30, bottom: 0 }}
                            >
                                <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#15FFAB" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#15FFAB" stopOpacity={0} />
                                </linearGradient>
                                </defs>
                                <XAxis dataKey="name" hide={true} />
                                <YAxis hide={true} />

                                <Tooltip />

                                <Area
                                type="monotone"
                                dataKey="uv"
                                stroke="#15FFAB"
                                // fill="#15FFAB"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                        <div className=' flex justify-between px-8 my-10 md:my-4 ' >
                            <div>
                                <p className=' font-bold text-white ' >$11.32</p>
                                <p className=' text-[#70707C] text-xs text-right font-medium'>Market Cap</p>
                            </div>
                            <div>
                                <p className=' font-bold text-white ' >10%</p>
                                <p className=' text-[#70707C] text-xs text-right font-medium'>% Reward</p>
                            </div>
                        </div>
                        <div className='w-full px-8 pt-14 ' >
                            <div className=' border-b border-[#536079] w-full pb-2 mb-4 ' >
                                <p className=' text-[#536079] text-sm font-medium'>403 Coin Holders</p>
                            </div>
                            <div className='w-full flex items-center ' >
                                <div className=' w-[34px] h-[34px] rounded-full bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                            </div>
                        </div>
                        <div className='w-full px-8 md:mb-0 mb-20 pt-14 ' >
                            <div className=' border-b border-[#536079] w-full pb-2 mb-4 ' >
                                <p className=' text-[#536079] text-sm font-medium'>1.2k liked</p>
                            </div>
                            <div className='w-full flex items-center ' >
                                <div className=' w-[34px] h-[34px] rounded-full bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                                <div className=' w-[34px] h-[34px] rounded-full -ml-2 bg-blue-700  ' >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 