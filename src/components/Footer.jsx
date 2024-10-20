import React from 'react'

// icons
import { CiFacebook, CiFaceFrown, CiInstagram, CiTwitter } from "react-icons/ci";
import localFont from "next/font/local"
import { motion } from 'framer-motion';

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-bold' 
});

const Footer = () => {
  return (
    <>
        <div id="container" className={` mt-5 `}>
            <div id="strip" className={` bg-blacks p-5 `}></div>
            <div id="upper" className={` bg-black p-6 lg:flex lg:flex-wrap justify-between gap-2 `}>
                <motion.div
                    initial={{
                        x: -50
                    }}
                    whileInView={{
                        y: 0,
                        x: 0,
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                        }
                    }} 
                    id="logo-intro" className={` text-white flex flex-col mb-7 `}
                >
                    <motion.p 
                        // i want the text to be shown like type animation
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: 0.2,
                            },
                            x:10
                        }}
                        className={`text-4xl font-bold  ${AktivGroteskBold.className}`}
                    >Ready to Take Action?</motion.p>
                    <p className={` text-xs text-[#49494a] text-wrap w-[60%] mt-2 `}>Join a growing community of eco-conscious individuals. Together, we can protect our planet, one small action at a time.</p>
                </motion.div>

                <motion.div 
                    initial={{
                        y:50
                    }}
                    whileInView={{
                        y:0,
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                        }
                    }}
                    id="Explore" className={` ${AktivGroteskRegular.className} flex flex-col gap-2 mb-7 `}
                >
                    <p className={` text-white text-lg font-semibold `}>Explore</p>
                    <ul className={` cursor-pointer text-[#49494a] text-sm flex flex-col gap-1 `}>
                        <li>Sign Up</li>
                        <li>Track My Impact</li>
                        <li>Capabilities</li>
                        <li>View Leaderboard</li>
                    </ul>
                </motion.div>

                <motion.div 
                    initial={{
                        y:50
                    }}
                    whileInView={{
                        y:0,
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                        }
                    }}
                    id="duel-visit" className={` ${AktivGroteskRegular.className} flex flex-col gap-2 mb-7 `}
                >
                    <div id="Visit" className='flex flex-col gap-2'>
                        <p className={` text-white text-lg font-semibold `}>Visit</p>
                        <p className={` text-[#49494a] `}>1456 Edgewood Drive, <br/> Palo Alto, <br/> California - 94301</p>
                    </div>
                    <div id="visit-business" className='flex flex-col gap-2 mt-4'>
                        <p className={` text-white text-lg font-semibold `}>New Business</p>
                        <p className={` text-[#49494a] `}>zucky@lizzi.com<br/> 777 333 6111 </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{
                        y:50
                    }}
                    whileInView={{
                        y:0,
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                        }
                    }}
                    id="follow" className='flex flex-col gap-2 mb-7'
                >
                    <p className={` text-white text-lg font-semibold `}>Follow</p>
                    <ul className={` cursor-pointer text-[#49494a] text-sm flex flex-col gap-2 `}>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </motion.div>
                
                <motion.div
                    initial={{
                        y:50
                    }}
                    whileInView={{
                        y:0,
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                        }
                    }} 
                    id="legal" className='flex flex-col gap-2 mb-7'
                >
                    <p className={` text-white text-lg font-semibold `}>Legal</p>
                    <ul className={` cursor-pointer text-[#49494a] text-sm flex flex-col gap-2 `}>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </motion.div>
            </div>
            <div id="lower" className={` bg-black p-5 `}>
                <div id="text" className={`  text-xs `}>
                    <motion.p
                        whileHover={{
                            scale: 1.2,
                            x:'10%'
                        }} 
                        className={` cursor-pointer ${AktivGroteskBold.className} text-[#49494a] font-semibold `}>© 2024 ZUCK. All Rights Reserved.</motion.p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer