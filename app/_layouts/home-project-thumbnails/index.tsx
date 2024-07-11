'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { projectOptions } from '@/data';
import { randomId } from '@/utils';
import { ProjectSlider } from '@/components';

export function HomeProjectThumbnails() {
  const target = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'end start'],
  });

  const transformX1 = useTransform(scrollYProgress, [0, 1], [-250, 0]);
  const transformX2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const firstSlider = projectOptions.first.map(({
    type,
    source,
    title,
    description,
    link,
  }: {
    type: string,
    source: string,
    title: string,
    description: string,
    link: string,
  }) => {
    const id = randomId();
    return (
      <ProjectSlider key={id} type={type} source={source} title={title} description={description} link={link}/>
    );
  });

  const secondSlider = projectOptions.second.map(({
    type,
    source,
    title,
    description,
    link,
  }: {
    type: string,
    source: string,
    title: string,
    description: string,
    link: string,
  }) => {
    const id = randomId();
    return (
      <ProjectSlider key={id} type={type} source={source} title={title} description={description} link={link}/>
    );
  });

  return (
    <section ref={target} className='relative pt-[200px] pb-[250px]'>
      <div className='grid items-center'>
        <div>
          <motion.div
            className='mb-4 md:mb-6 lg:mb-8 xl:mb-10 flex gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-[120vw]'
            style={{
              x: transformX1,
            }}
          >
            {firstSlider}
          </motion.div>
          <motion.div
            className='flex gap-4 md:gap-6 lg:gap-8 xl:gap-10 w-[120vw]'
            style={{
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