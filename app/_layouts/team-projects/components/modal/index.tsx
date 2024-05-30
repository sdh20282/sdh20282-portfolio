'use client';

import { LegacyRef, forwardRef } from 'react';
import Image from 'next/image';

import { Variants, motion } from 'framer-motion';

import { thumbnailOptions } from '@/data';
import { randomId } from '@/utils';

const _ThumbnailModal = (
  { variants, active, index, ...props }: { variants: Variants, active: boolean, index: number }, 
  ref: LegacyRef<HTMLDivElement>
) => {
  return (
    <motion.div
      ref={ref}
      className='flex justify-center items-center pointer-events-none fixed left-1/2 top-1/2 w-[540px] h-[320px] overflow-hidden rounded bg-secondary-foreground'
      variants={variants}
      initial='initial'
      animate={active ? 'enter' : 'closed'}
      {...props}
    >
      <div
        className='relative h-full w-full'
        style={{
          top: `${index * -100}%`,
          transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        {
          thumbnailOptions.map(({ title, image }) => {
            return (
              <div key={randomId()} className='flex items-center justify-center h-full w-full object-cover'>
                <Image
                  src={image}
                  className='w-full h-full'
                  width={320}
                  height={320}
                  alt={`${title} thumbnail image`}
                />
              </div>
            );
          })
        }
      </div>
    </motion.div>
  );
}

export default forwardRef(_ThumbnailModal);