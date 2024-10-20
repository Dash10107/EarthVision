import React, { useState, useEffect } from 'react'
import localFont from "next/font/local"

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-bold' 
});

// icons
import { RxCross2 } from "react-icons/rx";
import { CiSearch, CiUser } from "react-icons/ci";
import { TbMenu } from "react-icons/tb";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { events } from '@/events';

const Header = ({ text1, text2, linktext, tabs, setNeonDark, neonDark }) => {
    const [showAnnouncement, setShowAnnouncement] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [paginate, setPaginate] = useState(true);
    const [searchVisible, setSearchVisible] = useState(false);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const options = events?.map(product => ({ id: product?.id, name: product?.title }));
        setOptions(options);
    }, []);

    return (
        <>
            <div id="contianer">
                {
                    showAnnouncement && (
                        <motion.div id="announcement-banner" className={`bg-blacks p-2 flex justify-between items-center gap-1`}
                            initial={{ y: -100 }}
                            animate={{ y: 0, transition: { duration: 0.5 } }}
                            exit={{ y: -100, transition: { duration: 0.5 } }}
                        >
                            <div id="icon" onClick={() => setShowAnnouncement(!showAnnouncement)}>
                                <RxCross2 size={25} color='#8f8f8f' />
                            </div>
                            <div id="announcement" className='flex gap-1 text-white '>
                                <p className={`${AktivGroteskBold.variable} text-[#8f8f8f] text-xs md:text-base`}>{text1}</p>
                                <p className='font-bold text-[#d4d4d4] text-xs md:text-base'>{text2}</p>
                            </div>
                            <div id="external-link" className='text-[#8f8f8f]'>
                                <p onClick={() => setNeonDark(!neonDark)} className='underline text-xs md:text-base'>
                                    {linktext}
                                </p>
                            </div>
                        </motion.div>
                    )
                }

                {/* Navigation bar */}
                <motion.div id="navigation-bar" className={` ${neonDark && "text-white"} p-4 flex justify-between items-center`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div id="logo" className='flex items-center gap-4'>
                        <div className='md:hidden' onClick={() => setShowModal(!showModal)}>
                            <TbMenu size={20} />
                        </div>
                        <p className={`text-4xl font-bold ${AktivGroteskBold.className}`}>
                            <Link href={"/"}>
                                EarthVision
                            </Link>
                        </p>
                    </div>
                    <div id="tabs" className='md:flex gap-9 hidden'>
                        {
                            tabs.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <p className={`text-lg ${item.underline ? "underline" : ""} ${AktivGroteskRegular.className}`}>{item.name}</p>
                                </Link>
                            ))
                        }
                    </div>

                    <div id="icons" className='flex items-center gap-2'>
                        {/* Search Input Box */}
                        {searchVisible ? (
                            <motion.div 
                                className="fixed top-[6rem] left-0 w-full bg-white z-50 p-4 flex items-center"
                                initial={{ x: 50, opacity: 0 }} 
                                animate={{ x: 0, opacity: 1 }} 
                                exit={{ x: 50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Typeahead Search Input */}
                                <Typeahead
                                    id="basic-typeahead-single"
                                    labelKey="name"
                                    onChange={(selected) => {
                                        if (selected.length > 0) {
                                            window.location.assign(`/Events/event`);
                                        }
                                    }}
                                    options={options}
                                    placeholder="Search Events Here..."
                                    minLength={2}
                                    className="w-full border rounded-lg shadow-lg p-2 pl-10 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                                />
                                {/* Close Button Inside Search Bar */}
                                <button onClick={() => setSearchVisible(false)} className="absolute right-6 top-6">
                                    <RxCross2 size={20} />
                                </button>
                            </motion.div>
                        ) : (
                            <button onClick={() => setSearchVisible(true)} className="flex items-center transition-all duration-300 ease-in-out">
                                <CiSearch size={25} />
                            </button>
                        )}
                        <CiUser size={25} />
                    </div>
                </motion.div>

                {/* Mobile Menu */}
                {
                    showModal && (
                        <motion.div id="modal" className='z-30 border w-full absolute bg-white md:hidden p-2 mt-2 rounded-lg'
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div id="icon" className='absolute right-1' onClick={() => setShowModal(!showModal)}>
                                <RxCross2 size={25} color='#8f8f8f' />
                            </div>
                            {
                                tabs.map((item, index) => (
                                    <Link key={index} href={item.link}>
                                        <p className={`text-lg mt-3 font-semibold ${item.underline ? "underline" : ""} ${AktivGroteskRegular.className}`}>{item.name}</p>
                                    </Link>
                                ))
                            }
                        </motion.div>
                    )
                }
            </div>
        </>
    )
}

export default Header;
