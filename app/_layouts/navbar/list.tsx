'use client';

import { Dot } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import { navItems } from '@/data';
import { randomId } from '@/utils';

export function NavbarList() {
  const items = navItems.slice(1).map(({ href, title }) => {
    return (
      <li key={randomId()} className='group'>
        <Link href={href}>
          <MagneticButton className='p-5'>
            <p className='text-base capitalize'>{title}</p>
            <div className='flex items-center justify-center'>
              <Dot className='scale-0 transition-transform duration-200 ease-in-out group-hover:scale-100' />
            </div>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className='flex items-center max-lg:hidden'>{items}</ul>;
}