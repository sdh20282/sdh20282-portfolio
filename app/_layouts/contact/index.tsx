'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo } from './components';
import { Parallax } from '@/components';
import { useWindowSize } from '@uidotdev/usehooks';

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const { height: windowHeignt } = useWindowSize();

  const { blockHeight, footerHeight } = useContactSlider(containerRef, windowHeignt ?? 500);

  return (
    <motion.footer
      ref={containerRef}
      className='relative min-h-screen flex flex-col bg-white'
      style={{
        // margin: footerHeight,
      }}
    >
      <motion.div
        className='absolute w-[100vw] bg-[#1c1c1c] shadow-xl'
        style={{
          top: 0,
          height: blockHeight,
          borderRadius: '0 0 50% 50% / 0 0 20% 20%',
        }}
      />
      <div className='mt-auto' style={{
        padding: '25vh 1vw 0',
      }}>
        <SocialInfo />
      </div>
    </motion.footer>
  )
}