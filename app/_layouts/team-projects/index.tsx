"use client";

import { useRef } from 'react';

import { useFollowPointer } from '@/hooks';

import {
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailList
} from './components';

import ThumbnailModal from './components/modal';

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

export function TeamProjects() {
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
        className='relative w-full min-h-screen py-[20vh] px-[10%] text-white flex flex-col gap-[5vw] bg-black'
        onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
      >
        <header className='w-[50%] flex flex-col justify-center gap-[10px]'>
          <h2>Team Projects</h2>
        </header>
        <div className='flex flex-col w-full'>
          <ThumbnailList
            handlePointerEnter={handlePointerEnter}
            handlePointerLeave={handlePointerLeave}
            moveItems={moveItems}
          />
          <ThumbnailModal
            ref={modal}
            variants={scaleUp}
            active={active}
            index={index}
          />
          <ThumbnailCursorCircle
            ref={cursor}
            variants={scaleUp}
            active={active}
          />
          <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>View</ThumbnailCursorLabel>
        </div>
      </section >
  );
}