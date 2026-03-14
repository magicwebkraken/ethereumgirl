"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  {
    name: 'About Us',
    linkPath: '#About',
  },
  {
    name: 'Tokenomics',
    linkPath: '#Tokenomics',
  },
  {
    name: 'Hall of Fame',
    linkPath: '#Hall',
  },
  {
    name: 'Telegram',
    linkPath: 'https://t.me/ShiShionEth',
  },
  {
    name: 'Buy Now',
    linkPath: '',
  },

]

const sidebarVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    originX: 1, // right edge
    originY: 0, // top edge
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  visible: {
    scale: 1,
    opacity: 1,
    originX: 1,
    originY: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    originX: 1,
    originY: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function MobileMenu({ setMenuShow }) {
  const HandleClose = () => {
    setMenuShow(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={ sidebarVariants }
        className="absolute right-0 top-0 bg-[#8422CE] w-[300px] z-50 text-white py-10 px-5 rounded-3xl shadow-lg"
        style={ { originX: 1, originY: 0 } } // set transform origin to top right corner
      >
        <span
          className="absolute top-7 right-7 cursor-pointer select-none text-lg font-bold"
          onClick={ HandleClose }
        >
          ✕
        </span>

        <motion.ul className="flex flex-col gap-6 pl-10 mt-10">
          { NAV_LINKS.map((item, index) => (
            <motion.li
              key={ index }
              className="font-semibold cursor-pointer"
              variants={ linkVariants }
            >
              <Link to={ item.linkPath } onClick={ HandleClose }>
                { item.name }
              </Link>
            </motion.li>
          )) }
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
}
