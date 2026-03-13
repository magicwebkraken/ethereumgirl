"use client";
import { motion } from "framer-motion";

const popIn = {
    hidden: { scale: 0, rotate: -180 },
    show: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 12,
        },
    },
};

const boingIn = {
    hidden: { y: -200, rotate: -30, opacity: 0 },
    show: {
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 18,
        },
    },
};

const floatLoop = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const rotateWiggle = {
    animate: {
        rotate: [-5, 5, -5],
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export default function About() {
    return (
        <div className="md:mt-[10vw] mt-10 grid grid-cols-12 gap-6 relative" id="About">
            {/* Floating Background Image */ }
            <motion.img
                src="/images/eth-2.png"
                alt=""
                className="absolute right-[-10vw] md:right-[5vw] top-[-50vw] md:top-[-20vw] w-[80vw] md:w-[30vw] pointer-events-none rotate-wiggle "
                variants={ popIn }
                initial="hidden"
                whileInView="show"
                viewport={ { once: true, amount: 0.3 } }
            />

            {/* Left Section */ }
            <div className="lg:col-span-7 col-span-12 z-10 about">
                <motion.h1
                    className="text-[15vw] sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                    About 🌸 <br /> Eth Chan Erc
                </motion.h1>

                <motion.img
                    src="/images/about-1.png"
                    alt=""
                    className="w-full h-auto rounded-lg"
                    variants={ popIn }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.3 } }
                />
            </div>

            {/* Right Section */ }
            <div className="lg:col-span-5 col-span-12 space-y-8 z-10">
                {/* Row with Scroll and About Images */ }
                <div className="flex flex-col sm:flex-row md:items-center items-start gap-6">
                    <motion.img
                        src="/images/scroll.png"
                        alt=""
                        className="w-[40vw] sm:w-[13vw] h-auto md:block hidden"
                        variants={ rotateWiggle }
                        animate="animate"
                    />
                    <motion.img
                        src="/images/about-2.png"
                        alt=""
                        className="w-full sm:w-[21.5vw] h-auto ml-auto"
                        variants={ popIn }
                        initial="hidden"
                        whileInView="show"
                        viewport={ { once: true, amount: 0.3 } }
                    />
                </div>

                {/* Social + Join Section */ }
                <motion.div
                    className="relative w-full"
                    variants={ popIn }
                    initial="hidden"
                    whileInView="show"
                    viewport={ { once: true, amount: 0.3 } }
                >
                    <motion.img src="/images/about-cum.png" alt="" className="w-full h-auto" />

                    <div className="absolute top-[52%] left-[2%] w-full flex items-center justify-between px-4 sm:px-6 gap-4">
                        <div className="flex items-end gap-4">
                            <motion.a href="https://t.me/EthchanEthCoin">
                                <motion.img
                                    src="/images/t.png"
                                    alt=""
                                    className="w-[16vw] sm:w-[10vw] h-auto"
                                    whileHover={ { scale: 1.3, rotate: 10 } }
                                    transition={ { type: "spring", stiffness: 300 } }
                                />
                            </motion.a>
                            <motion.a href="https://x.com/EthchanEthCoin">
                                <motion.img
                                    src="/images/x.png"
                                    alt=""
                                    className="w-[16vw] sm:w-[10vw] h-auto"
                                    whileHover={ { scale: 1.3, rotate: -10 } }
                                    transition={ { type: "spring", stiffness: 300 } }
                                />
                            </motion.a>
                        </div>
                        <motion.a href="https://t.me/EthchanEthCoin">
                            <motion.img
                                src="/images/join.png"
                                alt=""
                                className="w-[50vw] sm:w-[30vw] h-auto translate-y-2"
                                variants={ floatLoop }
                                animate="animate"
                            />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
