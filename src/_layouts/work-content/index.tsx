import { useRef } from "react";

import { motion } from 'framer-motion';

import { useFollowPointer } from "@/hooks";
import { moreWorkOptions } from "@/data";
import {
  CursorFollowCircle,
  CursorFollowLabel,
  CursorFollowModal,
  WorkList
} from "@/components";

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

export function WorkContent() {
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
    <motion.div
      className='flex flex-col w-full py-[150px] px-[8vw] text-white'
      variants={slideUpContent}
      initial='initial'
      animate='enter'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className="w-full flex justify-between px-[7vw] uppercase pb-[25px] text-[#777] text-sm font-rubik">
        <span>title</span>
        <span>year</span>
      </div>
      <WorkList
        handlePointerEnter={handlePointerEnter}
        handlePointerLeave={handlePointerLeave}
        moveItems={moveItems}
        options={moreWorkOptions}
      />
      <CursorFollowModal
        ref={modal}
        variants={scaleUp}
        active={active}
        index={index}
        options={moreWorkOptions}
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
    </motion.div>
  )
}