
import Navbar from '../layout/Navbar';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="header md:h-[67.8vw] md:pb-0 pb-5">
      <Navbar />
      {/* main */ }
      <motion.div
        initial={ { opacity: 0, y: 100 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { type: 'spring', duration: 1, delay: 0.2 } }
        className="grid-cols-12 grid md:gap-5 gap-3 px-[4vw] md:mt-[5vw] mt-0 pb-[1.3vw] relative"
      >
        <div className="md:col-span-10 col-span-full flex md:flex-row flex-col-reverse">
          <motion.img
            initial={ { rotate: -20, opacity: 0, scale: 0 } }
            animate={ { rotate: 0, opacity: 1, scale: 1 } }
            transition={ { type: 'spring', duration: 1, delay: 0.3 } }
            src="/images/eth.png"
            alt=""
            className="md:w-[30vw] w-[90vw] scale-125 absolute md:top-[10vw] top-[90vw] md:left-[20vw] left-[40vw] rotate-wiggle"
          />
          <div className="md:space-y-5 space-y-3 md:mt-0 mt-5">
            <motion.h2
              initial={ { scale: 0.8, opacity: 0 } }
              animate={ { scale: 1, opacity: 1 } }
              transition={ { duration: 0.8, delay: 0.4 } }
              className="md:text-8xl text-7xl"
            >
              Meet 🌸 <br />SHISHI -
            </motion.h2>
            <motion.p
              initial={ { opacity: 0, y: 20 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.7, delay: 0.6 } }
              className="text-3xl"
            >
              Meet SHISHI - <br /> The Ethereum Foundation MANDATE
            </motion.p>
            <motion.div
              initial={ { opacity: 0, scale: 0.8 } }
              animate={ { opacity: 1, scale: 1 } }
              transition={ { delay: 0.8, duration: 0.6 } }
              className="flex items-center"
            >
              <a href="">
                <motion.img
                  whileHover={ { scale: 1.1 } }
                  src="/images/buy-2.png"
                  alt=""
                  className="md:w-[16vw] w-[140vw] transition-all ease-in-out"
                />
              </a>
              <a href="https://t.me/ethdreamgirl">
                <motion.img
                  whileHover={ { scale: 1.1 } }
                  src="/images/telegram.png"
                  alt=""
                  className="md:w-[18vw] w-[150vw] transition-all ease-in-out"
                />
              </a>
            </motion.div>
            <motion.img
              initial={ { opacity: 0, y: 20 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.8, delay: 1 } }
              src="/images/h-img-1.png"
              alt=""
              className="w-full"
            />
          </div>
          <motion.div
            initial={ { opacity: 0, x: 100 } }
            animate={ { opacity: 1, x: 0 } }
            transition={ { duration: 1, delay: 0.5 } }
          >
            <img
              src="/images/main.png"
              alt=""
              className="w-full md:block hidden"
            />
            <img
              src="/images/main-mobile.png"
              alt=""
              className="w-full md:hidden block"
            />
          </motion.div>
        </div>
        <motion.div
          initial={ { opacity: 0, y: 50 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 1, delay: 1.2 } }
          className="md:col-span-2 col-span-full space-y-4 mx-auto"
        >
          <div>
            <p className="text-xl pl-5 md:block hidden">
              <span className="font-semibold text-2xl">#Community</span>
              <br />
              <br />
              Every day, the $SHISHI community grows stronger!
            </p>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 justify-between items-center gap-5">
            <motion.img
              whileInView={ { opacity: 1, scale: 1 } }
              initial={ { opacity: 0, scale: 0.8 } }
              transition={ { duration: 0.5, delay: 1.3 } }
              src="/images/h-img-2.png"
              alt=""
              className="w-full md:h-[12vw] h-[48vw] object-contain"
            />
            <motion.img
              whileInView={ { opacity: 1, scale: 1 } }
              initial={ { opacity: 0, scale: 0.8 } }
              transition={ { duration: 0.5, delay: 1.4 } }
              src="/images/h-img-3.png"
              alt=""
              className="w-full md:h-[12vw] h-[48vw] object-contain"
            />
            <motion.img
              whileInView={ { opacity: 1, scale: 1 } }
              initial={ { opacity: 0, scale: 0.8 } }
              transition={ { duration: 0.5, delay: 1.5 } }
              src="/images/h-img-4.png"
              alt=""
              className="w-full h-[12vw] object-contain md:block hidden"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
