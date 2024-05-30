'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { useContactSlider } from '@/hooks';

import { SocialInfo } from './components';
import { Parallax } from '@/components';

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const { transformX, transformY } = useContactSlider(containerRef);

  return (
    <motion.footer
      ref={containerRef}
      className='relative max-h-screen bg-white'
      style={{ y: transformY }}
    >
      <div style={{
        padding: '21vh 1vw 0',
      }}>
        <SocialInfo />
      </div>
    </motion.footer>
  )
}