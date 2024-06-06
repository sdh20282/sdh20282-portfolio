'use client';

import { RefObject } from 'react';

import { useScroll, useTransform } from 'framer-motion';

import { useWindowSize } from '@uidotdev/usehooks';

export function useContactSlider(element: RefObject<HTMLElement>, windowHeight: number) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end end'],
  });
  
  const blockHeight = useTransform(scrollYProgress, [0, 1], [windowHeight, 20]);
  const footerHeight = useTransform(scrollYProgress, [0, 1], [-windowHeight, 0]);

  return { blockHeight, footerHeight };
}