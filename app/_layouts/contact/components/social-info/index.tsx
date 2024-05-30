'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function SocialInfo() {
  return (
    <div className='px-12 pb-4 pt-10 text-black'>
      <div className='flex flex-wrap items-stretch justify-between gap-5'>
        <div className='flex gap-8'>
          <div>
            <p className='text-[#777] uppercase text-sm'>Last Updated</p>
            <p className='mt-7 text-lg mb-2 font-normal'>2024-05-31</p>
          </div>
        </div>

        <div className='flex flex-col'>
          <p className='pl-2 text-[#777] uppercase text-sm'>Socials</p>
          <ul className='flex gap-6 mt-auto'>
            {
              socialMedias.map(({ href, title }) => {
                return (
                  <li
                    key={randomId()}
                    className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
                  >
                    <Link href={href} target='_blank' rel='noopener' passHref className='group'>
                      <MagneticButton className='relative p-2 uppercase text-lg font-normal'>
                        {title}
                        <div className='w-full h-[1px] bg-[#1c1c1c] mt-1' />
                      </MagneticButton>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}