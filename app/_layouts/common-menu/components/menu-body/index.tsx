'use client';

import { motion } from 'framer-motion';

import {
  Background,
  Links,
  Socials,
} from './components';

const backgroundChange = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const slideLeft = {
  initial: {
    x: 'calc(100% + 100px)',
  },
  enter: {
    x: '0',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    x: 'calc(100% + 100px)',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export function MenuBody() {
  return (
    <motion.div
      className='fixed inset-0 z-[20000] bg-black bg-opacity-20'
      variants={backgroundChange}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        className="fixed inset-0"
        variants={slideLeft}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <Background />
        <div className='absolute right-0 top-0 w-[600px] h-screen bg-black text-white'>
          <div className='flex h-full flex-col justify-between p-24'>
            <Links />
            <Socials />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}