"use client";

import { useRef } from 'react';
import Link from 'next/link';

import { useFollowPointer } from '@/hooks';
import { Magnetic } from '@/components';
import { recentWorkOptions } from '@/data';
import {
  CursorFollowCircle,
  CursorFollowLabel,
  CursorFollowModal,
  WorkList,
} from '@/components';

const scaleUp = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export function HomeRecentWorks() {
  const modal = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

  return (
    <section
      id='projects'
      className='relative w-full px-[8vw] text-white flex flex-col z-30'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <header className='w-full uppercase text-[#04ffd5] text-sm'>
        <h2>Recent Works</h2>
      </header>
      <div className='flex flex-col w-full mt-[50px]'>
        <WorkList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
          options={recentWorkOptions}
        />
        <CursorFollowModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
          options={recentWorkOptions}
        />
        <CursorFollowCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
        />
        <CursorFollowLabel 
          ref={label} 
          variants={scaleUp} 
          active={active}
        >
          <span>View</span>
        </CursorFollowLabel>
      </div>
      <Magnetic className='w-fit mx-auto mt-[100px]'>
        <Link
          href="/work" 
          className='
            relative block w-[170px] h-[70px] border border-[#777] rounded-full overflow-hidden
            before:w-[170px] before:h-[125px] before:absolute before:top-[125px] before:left-0 before:bg-[#04ffd5] before:rounded-[50%] before:transition-all before:duration-0 before:ease-in-out hover:before:-top-[25px] hover:before:duration-300
            after:w-[170px] after:h-[125px] after:absolute after:-top-[125px] after:left-0 after:bg-[#04ffd5] after:rounded-[50%] after:transition-all after:duration-300 after:delay-0 hover:after:-top-[25px] hover:after:duration-0 hover:after:delay-300
          '
        >
          <Magnetic className='absolute w-full h-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center'>
            <span className='text-sm'>More Work</span>
          </Magnetic>
        </Link>
      </Magnetic>
    </section >
  );
}