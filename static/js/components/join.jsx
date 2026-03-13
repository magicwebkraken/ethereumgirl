import React from 'react'
import BlurText from './animations/BlurText'
import FadeContent from './animations/FadeContent'
import AnimatedContent from './animations/AnimatedContent'

export default function Join() {
    return (
        <div className='mt-[5vw]'>
            <div className='grid md:grid-cols-4 grid-cols-2 justify-center relative z-50'>
                <img src="/images/card-img1.png" alt="" className='md:w-[25vw] w-full rotate-wiggle' />
                <img src="/images/card-img2.png" alt="" className='md:w-[25vw] w-full rotate-wiggle ml-[-7vw]' />
                <img src="/images/card-img3.png" alt="" className='md:w-[25vw] w-full rotate-wiggle md:ml-[-6vw] ml-3 md:mt-0 -mt-8' />
                <img src="/images/card-img4.png" alt="" className='md:w-[25vw] w-full rotate-wiggle md:ml-[-5vw]  -ml-5 md:mt-0 -mt-8' />
            </div>
            <img src="/images/pink-elips.png" alt="" className='md:mt-[-40vw] mt-[-60vw] md:scale-100 scale-150 opacity-80' />
            <div className='join rounded-b-3xl md:px-10 px-8 md:mt-[-5vw] mt-10'>
                <BlurText
                    text="Join Us 🌸"
                    delay={ 150 }
                    animateBy="words"
                    direction="top"
                    className="md:text-[20vw] text-[56px] leading-[18vw] font_2 mb-3 text-center"
                />
                <div className='grid grid-cols-12 gap-5 items-center'>
                    <FadeContent className='md:col-span-8 col-span-full' blur={ true } duration={ 1000 } easing="ease-out" initialOpacity={ 0 }>
                        <p className=' '>ETHCHAN is a community-based memecoin with no affiliation
                            to the actual ethchan author (Shiro). The ETHCHAN team is not responsible for any financial decisions made, any investment is done on your own incentive,
                            & you bear full risk & responsibility. We do not promise any financial returns.</p>
                    </FadeContent>

                    <div className='flex items-center md:-ml-[3vw] -ml-0 col-span-full md:col-span-4 pb-8'>
                        <a href="">
                            <img src="/images/buy-2.png" alt="" className='md:w-[15vw] w-[80vw] transition-all ease-in-out hover:scale-105' />
                        </a>
                        <a href="https://t.me/EthchanEthCoin">
                            <img src="/images/telegram.png" alt="" className='md:w-[18vw] w-[95vw]  transition-all ease-in-out hover:scale-105' />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}
