import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'


const TextImageCard = ({ head, title, text, imageUri, buttonText, direction, dynamicGrid, setNeonDark, neonDark }) => {
  return (
    <>
        <motion.div 
            initial={{
                x: -100,
                opacity: 0
            }} 
            whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 }
            }}    
            id="container" className={` md:flex items-center justify-between gap-3 p-6 mx-auto max-w-5xl ${neonDark && "text-white"} `}
        >
            
            {
                direction === "left" ? (
                    <motion.div
                        id="left" className='mr-7'
                    >
                        <div className='bg-gray-100 p-7 rounded-2xl'>
                            <Image 
                                src={imageUri}
                                alt={title}
                                width={1100}
                                height={1100}
                                className=''
                            />
                        </div>
                    </motion.div>
                ) : ""
            }
            <div id="left" className={`flex flex-col ${direction === "right" ? "items-start" : "items-end"}`}>
                <div id="heading" className='text-2xl mb-7 font-semibold'>
                    {head}
                </div>
                <div id="title" className='text-5xl mb-2 md:mb-7 font-bold'>
                    {title}
                </div>
                <div id="text" className='text-lg mb-2 md:mb-7 md:w-[70%]'>
                    {text}
                </div>
                <div id="button" className='my-4 md:my-10'>
                    <Button 
                        text={buttonText}
                        arrowType="minimal"
                        mode="light"
                    />
                </div>

            </div>
            {
                direction === "right" ? (
                    <div id="right">
                       {
                        dynamicGrid ? (
                            <div className='pt-20'>
                                <Image 
                                    src={"https://debugcodes.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofilepic.989d3af8.jpg&w=3840&q=75"}
                                    alt={title}
                                    width={1100}
                                    height={1100}
                                    className='rounded-xl relative hover:scale-150 hover:z-20 transition ease-in-out duration-300'
                                />
                                <Image 
                                    src={"https://www.dash10107.me/avatar.jpg"}
                                    alt={title}
                                    width={1100}
                                    height={1100}
                                    className='rounded-xl z-10 mt-2 md:relative md:-top-56 md:-left-40 hover:scale-150 hover:z-20 transition ease-in-out duration-300'
                                />
                                <Image 
                                    src={"https://rachit-chheda.netlify.app/static/media/HeroImage.ff8c45127080e96bd251.jpg"}
                                    alt={title}
                                    width={1100}
                                    height={1100}
                                    className='rounded-xl top-0 relative hover:scale-150 hover:z-20 transition ease-in-out duration-300'
                                />
                                <Image 
                                    src={"https://instagram.fbom3-2.fna.fbcdn.net/v/t51.2885-19/428492338_414016871042416_1749677351529197520_n.jpg?_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=rqPcMWb_AoIQ7kNvgHwvWyJ&_nc_gid=2571855ca3504aea90b86ae4b54bdc5f&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYCNODEoII8T-4vvKIM7O12_7D7Ek6IwUWn2iKnOww_mFw&oe=671A5C2D&_nc_sid=7d3ac5"}
                                    alt={title}
                                    width={1100}
                                    height={1100}
                                    className='rounded-xl z-10 mt-2 md:relative md:-top-56 md:-left-40 hover:scale-150 hover:z-20 transition ease-in-out duration-300'
                                />
                            </div>
                        ) : (
                            <div className='bg-gray-100 p-7 rounded-2xl'>
                                <Image 
                                    src={imageUri}
                                    alt={title}
                                    width={1100}
                                    height={1100}
                                    className=''
                                />
                            </div>
                        )
                       }
                    </div>
                ) : ""
            }
        </motion.div>
    </>
  )
}

export default TextImageCard