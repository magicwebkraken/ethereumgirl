import React from 'react'
import AnimatedContent from './animations/AnimatedContent'
import FadeContent from './animations/FadeContent'

export default function Tweet_sec() {
    return (
        <div className='relative md:mt-[5vw] mt-[15vw]'>
            <AnimatedContent
                distance={ 150 }
                direction="vartical"
                reverse={ false }
                duration={ 1.2 }
                ease="bounce.out"
                initialOpacity={ 0.2 }
                animateOpacity
                scale={ 1.1 }
                threshold={ 0.2 }
                delay={ 0.3 }
            >

                <img src="/images/tweet-bg.png" alt="" className='md:block hidden' />
                <img src="/images/tweet-bg-mobile.png" alt="" className='block md:hidden' />

            </AnimatedContent>
            <div className='absolute md:right-0 md:left-auto left-0 md:top-[14vw] top-[132vw] md:p-0 p-5'>
                <AnimatedContent
                    distance={ 150 }
                    direction="horizontal"
                    reverse={ false }
                    duration={ 1.2 }
                    ease="bounce.out"
                    initialOpacity={ 0.2 }
                    animateOpacity
                    scale={ 1.1 }
                    threshold={ 0.2 }
                    delay={ 0.3 }
                >

                    <img src="/images/tweet.png" alt="" className=' md:w-auto w-full ' />

                </AnimatedContent>
            </div>

            <FadeContent blur={ true } duration={ 1000 } easing="ease-out" initialOpacity={ 0 }>
                <p className='md:w-[50%] w-[88%] absolute right-5 md:bottom-[4vw] bottom-12 md:text-base text-lg'>
                    Shiro (@shiro57102) is the artist behind $SHISHI, a daily art series called
                    “Day X of drawing $SHISHI until $10,000 ETH.” The project has caught the Ethereum community’s
                    eye — even earning a follow from Vitalik himself.
                </p>
            </FadeContent>

        </div>
    )
}
