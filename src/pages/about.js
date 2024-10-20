import Header from '@/components/Header'
import React, { useContext } from 'react'

import HeroTexts from '@/components/HeroTexts'
import TextImageCard from '@/components/TextImageCard'
import ThemeContext from '@/context/ThemeContext'

const about = () => {

  const text = " We're two best friends who share a love for coding and building cool stuff. With a few years of hands-on experience, we’ve worked as freelance developers and interned at places like Innovation Hacks AI and Vital Solutions, picking up skills in both frontend and backend development. Our journey into the world of tech started back in high school, and we’ve been hooked ever since. Whether it’s solving problems or creating new projects, we’re always up for the challenge and excited to keep learning and growing together "

  const { setNeonDark, neonDark } = useContext(ThemeContext)

  return (
    <>
        <div id="container" className={` ${neonDark && "bg-[#0d0d0d] text-white"} `}>
            <Header 
                text1={"The winner for Minithon is"} 
                text2={"Akhand Bharat"} 
                linktext={"profiles"}
                setNeonDark={setNeonDark}
                neonDark={neonDark}
                tabs={[
                  { name: "Home", link: "/" },
                  { name: "About", link: "/about", underline: true },
                  { name: "Events", link: "/Events/event" },
                  { name: "Profile", link: "/Auth/profile" },
                  { name: "Calendar", link: "/Calendar/calendar" },
                ]} 
            />

            <HeroTexts 
              heading={"We Are Akhand Bharat!"}
              para={""}
            />

            <div id="textimgcard" className='flex justify-center mx-auto'>
              <TextImageCard 
                head={"WE"}
                title={"#the_best"}
                text={text}
                imageUri={"https://media.sonos.com/images/znqtjj88/production/34735de0ce8535cb9fe2af5a78db26dcb4aaa9f1-2500x2500.png?w=750&q=100&fit=clip&auto=format"}
                buttonText={""}
                direction={"right"}
                dynamicGrid={true}
              />
            </div>
            
        </div>
    </>
  )
}

export default about