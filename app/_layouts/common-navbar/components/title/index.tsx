'use client';

import Link from 'next/link';

import { Code } from 'lucide-react';

import { Magnetic } from '@/components';

export function NavbarTitle() {
  return (
    <Link href="/" className='group cursor-pointer' passHref>
      <Magnetic className='p-5 flex'>
        <div className='transition-transform duration-500 ease-in-out group-hover:animate-pulse'>
          <Code />
        </div>
        <div className='relative ms-2 flex overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out group-hover:pe-8'>
          <p className='transition-transform duration-500 ease-in-out group-hover:-translate-x-full'>
            Code by
          </p>
          <p className='ps-1 transition-transform duration-500 ease-in-out group-hover:-translate-x-14'>
            Donghyeon
          </p>
          <p className='absolute left-[156px] ps-1 transition-transform duration-500 ease-in-out group-hover:-translate-x-14'>
            Seo
          </p>
        </div>
      </Magnetic>
    </Link>
  );
}