import { motion } from 'framer-motion'
import React from 'react'

export default function FAQ() {

    const [tab, setTab] = React.useState(0)
    
    const clickHandler =(item: number)=> {
        if(tab === item) { 
            setTab(-1)
        } else { 
            setTab(item)
        }
    }

    return (
        <div className=' w-full px-6 md:px-20 flex  py-40 flex-col !bg-[#0c0f15] items-center ' >

            <div className="container">
                <div className="sec-head custom-font relative text-center">
                    <h6 id="gradenttext" className="wow fadeIn leading-[1.8] !font-medium !text-[15px] " data-wow-delay=".5s">
                        NEED HELP WITH ANSWERS?
                    </h6>
                    <h3 className="wow  !font-bold !text-white !leading-[1.1] !text-5xl " data-splitting>
                        FREQUENTLY ASKED!
                    </h3>
                    <span className="tbg mt-">Answers</span>
                </div>
            </div>
            <div className=' w-full flex lg:flex-row flex-col mt-6 mb-20 ' >
                <div className=' w-full flex justify-center pr-10 ' >
                    <p className=' max-w-[450px] text-white wow txt !text-[14.7px] !font-normal  ' >Haven’t found what you’re looking for?
                        Try emailing  <a href="mailto:support@loozr.io"><span  id="gradenttext" >support@loozr.io</span></a> — we’re here to help.</p>
                </div>
                <div className=' w-full flex justify-center md:pl-10 text-white ' >
                    <div className=' w-[600px] ' >
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div role="button" onClick={()=> clickHandler(0)}  className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >What is Loozr? </p>
                                <svg className={tab === 0 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 0 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 tracking-[0.4px]  ' > Community-driven music streaming platform enabling creators & musicians to launch tokens, stream music and earn.</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div role="button" onClick={()=> clickHandler(1)} className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >How do I get my LNS?</p>
                                <svg className={tab === 1 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 1 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 wow txt !text-[14.7px] !font-normal tracking-[0.4px]  ' >All Loozr users are allowed by LNS to use a human-readable. lzr name as their wallet address. Simply register and enter your unique .lzr name.</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div role="button" onClick={()=> clickHandler(2)} className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >How do I become an artists? </p>
                                <svg className={tab === 2 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 2 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 tracking-[0.4px]  ' >Simply create a user account, apply to become an artist, review community terms and verify you’re an artist (KYC), done!</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div role="button" onClick={()=> clickHandler(3)} className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >How to invest in an artist? </p>
                                <svg className={tab === 3 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 3 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 tracking-[0.4px]  ' >To get started, sign up for an account and explore various artists or creators. Once you find your favourite, navigate to their profile and locate the "Buy" coin button. Then, simply enter the desired amount of the artist token you want to purchase.</motion.p>
                            )}
                        </div>
                        <div className=' w-full border-b py-4 border-[#536079] ' > 
                            <div role="button" onClick={()=> clickHandler(4)} className=' flex items-center justify-between ' >
                                <p className=' text-xl font-bold ' >Is Loozr limited to only musicians? </p>
                                <svg className={tab === 4 ? " -rotate-180 ": ""} role='button' width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.232592 0.232592C0.514521 -0.0493376 0.955694 -0.0749676 1.26658 0.155702L1.35564 0.232592L8.20588 7.08247L15.0561 0.232592C15.3381 -0.0493376 15.7792 -0.0749676 16.0901 0.155702L16.1792 0.232592C16.4611 0.514521 16.4867 0.955694 16.2561 1.26658L16.1792 1.35564L8.76741 8.76741C8.48548 9.04934 8.04431 9.07497 7.73342 8.8443L7.64436 8.76741L0.232592 1.35564C-0.0775306 1.04552 -0.0775306 0.542714 0.232592 0.232592Z" fill="white"/>
                                </svg>
                            </div>
                            {tab === 4 && ( 
                                <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className=' mt-3 tracking-[0.4px]  ' >Nope! The Loozr model works for both creators and musicians, as well as businesses, events, podcasters, TikTokers/YouTubers, content creators, and so on.</motion.p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 