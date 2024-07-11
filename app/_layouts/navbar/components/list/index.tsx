'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Dot } from 'lucide-react';

import { MagneticButton } from '@/components';
import { navItems } from '@/data';
import { randomId } from '@/utils';

export function NavbarList() {
  const router = usePathname();

  return (
    <ul className='flex items-center max-lg:hidden'>
      {
        navItems.slice(1).map(({ href, title }) => {
          return (
            <li key={randomId()} className='group'>
              <Link href={href}>
                <MagneticButton className='p-5'>
                  <p className='text-lg capitalize'>{title}</p>
                  <div className='flex items-center justify-center'>
                    <Dot className={`${router.startsWith(href) ? 'scale-100' : 'scale-0'} transition-transform duration-200 ease-in-out group-hover:scale-100 size-8`} />
                  </div>
                </MagneticButton>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}