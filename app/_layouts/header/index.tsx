"use client";

import { motion } from 'framer-motion';

import { Slider } from '@/components';
import Image from 'next/image';

export const slideUp = {
  initial: {
    // y: 300,
    y: 0,
  },
  enter: {
    y: 0,
    // transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 2.5 },
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0 },
  },
};

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-black text-white'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src={"https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt='profile image'
        fill={true}
        className='object-cover md:scale-125 md:object-contain'
      />

      <div className='relative flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,15vw)]'>
            <Slider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Dong Hyeon Seo
                <span className='spacer'>—</span>
              </span>
            </Slider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <h4 className='text-[clamp(1.55em,2.5vw,2.75em)]'>
              <span className='block'>Front Developer</span>
              <span className='block'>Web Developer</span>
            </h4>
          </div>
        </div>
      </div>
    </motion.header>
  );
}