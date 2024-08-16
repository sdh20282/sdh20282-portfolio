import Link from 'next/link';

import { Magnetic } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function Socials() {
  return (
    <ul className='flex w-full gap-10'>
      {
        socialMedias.map(({ href, title }) => {
          return (
            <li key={randomId()}>
              <Link href={href} target='_blank' rel='noopener' passHref>
                <Magnetic className='relative py-2 uppercase text-lg font-normal cursor-pointer ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-white before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-white after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>
                  {title}
                </Magnetic>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}