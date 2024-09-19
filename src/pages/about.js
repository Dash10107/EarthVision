import Header from '@/components/Header'
import React from 'react'

import banner1 from "../assets/banner1.svg"
import banner2 from "../assets/banner2.svg"
import banner3 from "../assets/banner3.svg"
import HeroTexts from '@/components/HeroTexts'
import TextImageCard from '@/components/TextImageCard'


const about = () => {

  const text = " We're two best friends who share a love for coding and building cool stuff. With a few years of hands-on experience, we’ve worked as freelance developers and interned at places like Innovation Hacks AI and Vital Solutions, picking up skills in both frontend and backend development. Our journey into the world of tech started back in high school, and we’ve been hooked ever since. Whether it’s solving problems or creating new projects, we’re always up for the challenge and excited to keep learning and growing together "

  return (
    <>
        <div id="container">
            <Header 
                text1={"The winner for Minithon is"} 
                text2={"Zucky the Lizard"} 
                linktext={"profiles"}
                tabs={[
                  {name: "Home", link: "/", underline: false},
                  {name: "About", link: "/about", underline: true},
                  {name: "Contact", link: "/contact", underline: false}
                ]}  
            />

            <HeroTexts 
              heading={"We Are Zucky The Lizard"}
              para={""}
            />

            <div id="textimgcard" className='flex justify-center items-center mx-auto'>
              <TextImageCard 
                head={"Our Duo"}
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