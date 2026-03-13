import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { useRef } from 'react';
import BlurText from './animations/BlurText';

const images = [
    "/images/slide-1.png",
    "/images/slide-2.png",
    "/images/slide-3.png",
    "/images/slide-4.png",
    "/images/slide-5.png",
    "/images/slide-6.png",
    "/images/slide-7.png",
    "/images/slide-8.png",
    "/images/slide-9.png",
    "/images/slide-10.png",
    "/images/slide-11.png",
];

export default function App() {
    const swiperRef = useRef(null);

    const handleScale = (swiper) => {
        const slides = swiper.slides;
        const active = swiper.activeIndex;

        // Reset all slides
        slides.forEach((slide) => {
            slide.style.transition = 'transform 0.3s ease';
            slide.style.transform = 'scale(0.7)';
        });

        // Left of center
        slides[active]?.style && (slides[active].style.transform = 'scale(0.7)');

        // Center 2 slides
        slides[active + 1]?.style && (slides[active + 1].style.transform = 'scale(1.2)');
        slides[active + 2]?.style && (slides[active + 2].style.transform = 'scale(1.2)');

        // Right of center
        slides[active + 3]?.style && (slides[active + 3].style.transform = 'scale(0.7)');
    };

    return (
        <div className='mt-[5vw]'>
            <BlurText
                text="SHISHI Hall of Fame🌸"
                delay={ 150 }
                animateBy="words"
                direction="top"
                className="md:text-8xl text-6xl md:w-[40%] w-[90%] mx-auto justify-center text-center"
            />
            <img src="/images/Ellipse.png" alt="" className='md:mt-[-25vw] mt-[-35vw]' />

            <Swiper
                modules={ [Autoplay] }
                autoplay={ { delay: 2500, disableOnInteraction: false } }
                pagination={ { clickable: true } }
                slidesPerView={ 1 }
                spaceBetween={ 40 }
                breakpoints={ {
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                } }
                onInit={ (swiper) => {
                    swiperRef.current = swiper;
                    handleScale(swiper);
                } }
                onSlideChange={ (swiper) => handleScale(swiper) }
                className="mySwiper !pt-[5vw] !mt-[-24vw]"
            >
                { images.map((item, idx) => (
                    <SwiperSlide key={ idx }>
                        <img
                            src={ item }
                            alt={ `slide-${idx}` }
                            className="w-full h-full transition-transform duration-300 ease-in-out md:scale-100 scale-125"
                        />
                    </SwiperSlide>
                )) }
            </Swiper>
            <img src="/images/slider-bg.png" alt="" className='md:mt-[-7vw] mt-[-20vw]' />
        </div>
    );
}
