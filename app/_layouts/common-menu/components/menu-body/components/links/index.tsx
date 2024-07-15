'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';

import { navItems } from '@/data';
import { Magnetic } from '@/components';

const slideOut = {
  initial: {
    x: 80,
  },
  enter: (i: number) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2 + (0.05 * i),
    },
  }),
  exit: (i: number) => ({
    x: 1000,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: (0.05 * i),
    },
  }),
};

const scale = {
  open: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function Links() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <div className='mt-20 flex flex-col gap-3'>
      <div className='mb-10 border-b border-solid border-[#777]'>
        <p className='text-sm uppercase text-[#777]'>
          Navigation
        </p>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>
        {
          navItems.map(({ href, title }, index) => {
            return (
              <motion.li
                key={index}
                variants={slideOut}
                custom={index}
                initial='initial'
                animate='enter'
                exit='exit'
                onPointerEnter={() => setActiveLink(href)}
              >
                <Magnetic
                  className='relative w-fit my-4 flex items-center'>
                  <motion.div
                    className='absolute -left-11'
                    variants={scale}
                    animate={activeLink === href ? 'open' : 'closed'}
                  >
                    <Dot size={36} />
                  </motion.div>
                  <Link href={href} className='text-6xl capitalize'>
                    {title}
                  </Link>
                </Magnetic>
              </motion.li>
            );
          })
        }
      </ul>
    </div>
  );
}