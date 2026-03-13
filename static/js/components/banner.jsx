import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(imgRef.current,
            {
                scale: 1.2,
            },
            {
                scale: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top bottom", // when image top hits bottom of viewport
                    end: "bottom top",   // when image bottom hits top of viewport
                    scrub: true,         // smooth scrub as user scrolls
                }
            }
        );
    }, []);

    return (
        <div className='mt-[5vw] overflow-hidden'>
            <img
                ref={ imgRef }
                src="/images/banner.png"
                alt=""
                className='w-full'
            />
        </div>
    );
}
