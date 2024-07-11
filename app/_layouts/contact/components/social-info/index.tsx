'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function SocialInfo() {
  return (
    <div className='flex items-stretch gap-5 mt-auto pt-[150px] pb-[25px]'>
      <div className='flex flex-col'>
        <p className='text-[#777] uppercase text-sm'>Modified</p>
        <p className='py-2 uppercase text-lg'>2024.07.12</p>
      </div>
      <div className='flex flex-col ml-auto'>
        <p className='text-[#777] uppercase text-sm'>Socials</p>
        <ul className='flex gap-8 mt-auto'>
          {
            socialMedias.map(({ href, title }) => {
              return (
                <li
                  key={randomId()}
                  className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
                >
                  <Link href={href} target='_blank' rel='noopener' passHref className='group'>
                    <MagneticButton className='relative py-2 uppercase text-lg font-normal cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-gray-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-gray-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                      {title}
                    </MagneticButton>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}