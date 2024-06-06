'use client';

import { RefObject } from 'react';

import { useScroll, useTransform } from 'framer-motion';

export function useEducationShade(element: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  const transformY = useTransform(scrollYProgress, [0, 0.9], [600, 0]);

  return {  transformY };
}