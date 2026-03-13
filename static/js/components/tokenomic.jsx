"use client";
import { motion } from "framer-motion";
import BlurText from "./animations/BlurText";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20 } },
};

const popInStagger = {
    hidden: { opacity: 0, scale: 0.8 },
    show: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.15, type: "spring", stiffness: 300, damping: 15 },
    }),
};


export default function Tokenomic() {
    return (
        <div className="relative flex items-center justify-center mt-[10vw] " id="Tokenomics">
            {/* Background image floating */ }
            <img
                src="/images/eth-2.png"
                alt=""
                className="absolute right-[-10vw] md:right-[-5vw] top-[-40vw] md:top-[-22vw] w-[60vw] md:w-[30vw] rotate-wiggle z-30 pointer-events-none"
            />
            {/* Content Overlay */ }
            <div className="token md:p-14 p-0 pt-14 md:pb-20 pb-0 rounded-3xl grid grid-cols-12 md:grid-cols-12 gap-8 items-start">
                {/* Left Content */ }
                <div className="md:col-span-8 col-span-full">
                    <motion.div
                        variants={ fadeUp }
                        initial="hidden"
                        whileInView="show"
                        viewport={ { once: true, amount: 0.5 } }
                    >
                        <BlurText
                            text="Tokenomics 🌸"
                            delay={ 150 }
                            animateBy="words"
                            direction="top"
                            className="text-[12vw] md:text-start text-center md:justify-start justify-center sm:text-6xl lg:text-8xl font-bold mb-6"
                        />
                    </motion.div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
                        <motion.h2
                            variants={ popInStagger }
                            initial="hidden"
                            whileInView="show"
                            viewport={ { once: true, amount: 0.4 } }
                            className="text-4xl sm:text-3xl leading-snug text-center sm:text-left whitespace-pre-line"
                        >
                            🔒 <br /> Liquidity <br className="md:block hidden" /> Locked 
                        </motion.h2>
                        <motion.h2

                            variants={ popInStagger }
                            initial="hidden"
                            whileInView="show"
                            viewport={ { once: true, amount: 0.4 } }
                            className="text-4xl sm:text-3xl leading-snug text-center sm:text-left whitespace-pre-line"
                        >
                            💸 <br />0% Buy/Sell  <br className="md:block hidden" /> Tax
                        </motion.h2>
                        <motion.h2
                            variants={ popInStagger }
                            initial="hidden"
                            whileInView="show"
                            viewport={ { once: true, amount: 0.4 } }
                            className="text-4xl sm:text-3xl leading-snug text-center sm:text-left whitespace-pre-line"
                        >
                            📜 <br /> Contract <br className="md:block hidden" /> Renounced
                        </motion.h2>

                    </div>
                </div>

                {/* Right Image */ }
                <div className="md:col-span-4 col-span-full flex justify-center mt-6 md:mt-0">
                    <img
                        src="/images/token-img.png"
                        alt=""
                        className="w-full scale-[1.3] md:scale-[1.7] -mt-[5vw] md:-mt-[6.7vw] "
                    />
                </div>
            </div>
        </div>
    );
}
