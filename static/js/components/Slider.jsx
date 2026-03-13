import React from 'react'

import Marquee from "react-fast-marquee";

export default function Slider() {
    return (
        <div className='md:mt-5 mt-0'>
            <Marquee className='slide py-2 '>
                <div className='flex items-center gap-5'>
                    { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
                        <>
                            <img src="/images/logo.png" alt="" key={ idx } className='md:w-[10vw] w-[30vw]' /> -
                        </>
                    )) }
                </div>
            </Marquee>
        </div>
    )
}
