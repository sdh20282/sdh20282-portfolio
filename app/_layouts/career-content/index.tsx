'use client';

import { motion } from 'framer-motion';

import {
  CareerList,
} from "@/components";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const slideUpContent = {
  initial: {
    y: 400,
  },
  enter: {
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.6
    },
  },
};

export function CareerContent() {
  const searchParams = useSearchParams();

  const target = searchParams.get('target');

  return (
    <Suspense>
      <motion.div
        className='flex flex-col w-full py-[150px] px-[8vw] text-white'
        variants={slideUpContent}
        initial='initial'
        animate='enter'
      >
        <div className="w-full flex justify-between px-[7vw] uppercase pb-[25px] text-[#777] text-sm font-rubik">
          <span className='font-medium'>careers</span>
        </div>
        <CareerList target={target || ''} />
      </motion.div>
    </Suspense>
  )
}