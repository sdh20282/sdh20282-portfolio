"use client";

import Image from 'next/image';

import { motion } from 'framer-motion';

import { Parallax, TitleSlider } from '@/components';

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
      className='relative h-[110vh] overflow-hidden text-white'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <Image
        src={"https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        alt='profile image'
        fill={true}
        className='object-cover'
      />

      <div className='relative flex h-full pb-[7.5vh] flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className='text-[max(9em,11vw)] font-rubik font-normal'>
            <Parallax speed={-1}>
              <TitleSlider repeat={4} baseVelocity={2}>
                <span className='pe-12'>
                  <span>Dong Hyeon Seo</span>
                  <span className='ml-12'>-</span>
                </span>
              </TitleSlider>
            </Parallax>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-20 max-md:my-4 md:mx-36'>
            <div className='text-[clamp(1.55em,2vw,2.75em)]'>
              <Parallax speed={-1}>
                <span className='block'>Front Developer</span>
                <span className='block'>Web Developer</span>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}