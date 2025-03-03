'use client';

import { CharTyping, WordMove } from "@/components";
import { motion } from "framer-motion";

const reveal = {
  hidden: {
    y: '100px',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { 
      duration: 0.35,
    },
  }
};

const slideUp = {
  initial: {
    y: 500,
  },
  enter: {
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.7
    },
  },
};

export function DetailBackground({
  background
}: {
  background: string[]
}) {
  return (
    <motion.div 
      className="px-[16vw] pt-[50px] text-white"
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div className="font-nanumsquare text-white font-bold text-3xl">
        <CharTyping paragraph='프로젝트 배경' />
      </div>
      <div 
        className="
          pt-[50px]
          font-nanumsquare font-medium text-md
          flex flex-col gap-5
        ">
        {
          background.map(line => {
            return (
              <div key={line}>
                <WordMove paragraph={line} gap={6} />
              </div>
            )
          })
        }
      </div>
    </motion.div>
  )
}