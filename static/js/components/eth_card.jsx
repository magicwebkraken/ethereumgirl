import React, { useEffect } from 'react'
import BlurText from './animations/BlurText'
import AnimatedContent from './animations/AnimatedContent'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        mainimg: "/images/card-img1.png",
        bgimg: "/images/card-bg1.png",
        heading: "A unique & original series🌸",
        direction: "horizontal",
        para: "Talented artist Shiro has committed to uploading a new ETHCHAN drawing every day until ETH hits $10’000!"
    },
    {
        mainimg: "/images/card-img2.png",
        bgimg: "/images/card-bg3.png",
        heading: "Noticed by Vitalik!🌸",
        direction: "vartical",
        para: "TOn day 7 of her series, Vitalik followed her X account! It took a week for him to notice ETHCHAN and Shiro’s commitment!"
    },
    {
        mainimg: "/images/card-img3.png",
        bgimg: "/images/card-bg2.png",
        heading: "ETHCHAN team supports Shiro🌸",
        direction: "horizontal",
        para: "ETHCHAN proudly supports Shiro—minting 3 of her NFTs daily and having airdropped over 2% of our supply to her."
    }
]



export default function Eth_card() {


    useEffect(() => {
        const wiggleImages = gsap.utils.toArray('.main-wiggle');

        wiggleImages.forEach((img) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: img,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            tl.fromTo(
                img,
                { scale: 1.5, opacity: 0, rotate: -15 },
                {
                    scale: 1,
                    opacity: 1,
                    rotate: 15,
                    duration: 1,
                    ease: 'power3.out',
                }
            ).to(img, {
                rotate: 0,
                duration: 0.5,
                ease: 'power1.inOut',
            });
        });
    }, []);


    return (
        <div className='md:mt-[15vw] mt-[30vw] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-[35vw] '>
            { data.map((item, idx) => (
                <AnimatedContent
                    distance={ 150 }
                    direction={ item.direction }
                    reverse={ false }
                    duration={ 1.2 }
                    ease="bounce.out"
                    initialOpacity={ 0.2 }
                    animateOpacity
                    scale={ 1.1 }
                    threshold={ 0.2 }
                    delay={ 0.3 }
                >
                    <div className='relative' key={ idx }>
                        <img src={ item.bgimg } alt="" />
                        <div className='absolute md:top-[-12vw] top-[-35vw] md:p-8 p-10 overflow-hidden'>
                            <img src={ item.mainimg } alt={ item.heading } className='rotate-wiggle' />
                            <BlurText
                                text={ item.heading }
                                delay={ 150 }
                                animateBy="words"
                                direction="top"
                                className="md:text-[42px] md:leading-10 text-3xl font_2 mb-3"
                            />
                            <p>
                                { item.para }
                            </p>
                        </div>
                    </div>
                </AnimatedContent>

            )) }
        </div>
    )
}
