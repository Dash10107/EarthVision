import Image from 'next/image'
import React from 'react'
import Button from './Button'


const TextImageCard = ({ head, title, text, imageUri, buttonText, direction }) => {
  return (
    <>
        <div id="container" className='md:flex items-center justify-between gap-3 p-6 mx-auto max-w-5xl'>
            
            {
                direction === "left" ? (
                    <div id="left" className='mr-7'>
                        <div className='bg-gray-100 p-7 rounded-2xl'>
                            <Image 
                                src={imageUri}
                                alt={title}
                                width={1100}
                                height={1100}
                                className=''
                            />
                        </div>
                    </div>
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
                        <div className='bg-gray-100 p-7 rounded-2xl'>
                            <Image 
                                src={imageUri}
                                alt={title}
                                width={1100}
                                height={1100}
                                className=''
                            />
                        </div>
                    </div>
                ) : ""
            }
        </div>
    </>
  )
}

export default TextImageCard