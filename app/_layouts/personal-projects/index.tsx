'use client';

import { useRef } from 'react';

import { motion } from 'framer-motion';

import { projectOptions } from '@/data';
import { useProjectSlider } from '@/hooks';
import { randomId } from '@/utils';

import { ProjectSlider } from '@/components';

export function PersonalProjects() {
  const containerRef = useRef<HTMLElement>(null);
  const { transformX1, transformX2, transformY } = useProjectSlider(containerRef);

  const firstSlider = projectOptions.first.map(({ type, source }: { type: string, source: string }) => {
    const id = randomId();
    return (
      <ProjectSlider key={id} type={type} source={source} />
    );
  });

  const secondSlider = projectOptions.second.map(({ type, source }: { type: string, source: string }) => {
    const id = randomId();
    return (
      <ProjectSlider key={id} type={type} source={source} />
    );
  });

  return (
    <section ref={containerRef} className='relative z-10 bg-white'>
      <div className='grid items-center'>
        <div className='bg-[#1c1c1c] pt-14'>
          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className='mb-10 flex gap-10'
            style={{
              width: '120vw',
              x: transformX2,
            }}
          >
            {secondSlider}
          </motion.div>
        </div>

      </div>
    </section>
  );
}