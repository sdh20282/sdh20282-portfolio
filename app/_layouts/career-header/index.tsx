'use client';

import { motion } from 'framer-motion';

const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.6
    },
  },
};

export function CareerHeader() {
  return (
    <motion.div
      className="pt-[250px] px-[16vw]"
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div className="font-nanumsquare relative">
        <h1 
          className="
            flex flex-col gap-2 md:gap-4 font-bold text-white
            text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
          "
        >
          <span>꿈을 이루기 위해</span>
          <span>지금까지 걸어온 길입니다.</span>
        </h1>
      </div>
    </motion.div>
  )
}