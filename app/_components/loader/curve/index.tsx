'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { motion, Variants } from 'framer-motion';

const routes = {
  '/': 'Home',
  '/about': 'About',
  '/work/jetty-chart': 'Jetty Chart',
  '/work/nashda': '내쉬다',
  '/work/talkids': 'Talkids',
}

const text = {
  initial: {
    opacity: 1,
  },
  move: {
    opacity: 0,
    top: -100,
    transition: {
      duration: 0.75,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1]
    },
  },
}

const translate = {
  initial: {
    transform: 'translate(0, 0)',
  },
  move: {
    transform: 'translate(0, -100vh)',
    transition: {
      duration: 0.75,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1]
    },
  },
}

export function Curve() {
  const pathname = usePathname();
  
  return (
    <div className='relative'>
      <motion.p
        variants={text}
        viewport={{ once: true }}
        initial='initial'
        whileInView='move'
        className='fixed left-1/2 top-[40%] text-white text-[46px] z-[1500] -translate-x-1/2 text-center'
      >
        {
          // @ts-ignore
          routes[pathname]
        }
      </motion.p>
      <motion.div
        variants={translate}
        viewport={{ once: true }}
        initial='initial'
        whileInView='move'
        className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-black z-[1000]'
      />
    </div>
  )
}