'use client';

import { Dispatch, SetStateAction, useRef } from "react";

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { Magnetic } from "@/components";

export function MenuToggle({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['500px 500px', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => latest <= 1 && setIsOpen(false));

  return (
    <motion.div
      ref={containerRef}
      className='fixed top-0 right-0 m-[40px] z-[30000]'
      initial={false}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{ scale: scrollYProgress }}
    >
      <button onClick={() => setIsOpen(!isOpen)}>
        <Magnetic className={`
            w-[90px] h-[90px] rounded-full relative overflow-hidden ${isOpen ? 'bg-[#04ffd5]' : 'bg-black'} group
            before:w-[90px] before:h-[90px] before:absolute before:top-[90px] before:left-0 before:bg-[#04ffd5] before:rounded-[45%] before:transition-all before:duration-0 before:ease-in-out hover:before:top-0 hover:before:duration-300
            after:w-[90px] after:h-[90px] after:absolute after:-top-[90px] after:left-0 after:bg-[#04ffd5] after:rounded-[45%] after:transition-all after:duration-300 after:delay-0 hover:after:top-0 hover:after:duration-0 hover:after:delay-300
          `}>
          <Magnetic className="absolute z-10 w-[90px] h-[90px] rounded-full flex justify-center items-center text-white">
            <span
              className={`
                w-[28px] h-[12px] relative
                before:w-full before:h-[1px] before:absolute before:block before:transition-all before:duration-300
                after:w-full after:h-[1px] after:absolute after:block after:transition-all after:duration-300
                before:top-0 after:bottom-0
                group-hover:before:bg-black group-hover:after:bg-black
                ${isOpen ? 'before:-rotate-45 before:top-1/2 before:-translate-y-1/2 after:rotate-45 after:top-1/2 after:-translate-y-1/2 before:bg-black after:bg-black' : 'before:bg-white after:bg-white'}
              `}
            />
          </Magnetic>
        </Magnetic>
      </button>
    </motion.div>
  )
}