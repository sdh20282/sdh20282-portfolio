'use client';

import { useRef } from "react";

import { motion, useScroll } from 'framer-motion';

import { useWindowSize } from "@/hooks"

import { Flow } from "./components/flow";

export function Education() {
  const target = useRef(null);
  const { height } = useWindowSize();
  const sectionHeight = 5000;

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'end end'],
  });

  return (
    <motion.section 
      ref={target} 
      className='relative overflow-hidden -mb-[100vh]'
      id="education"
      style={{
        height: sectionHeight,
      }}
    >
      {
        height && <Flow windowHeight={height!} sectionHeight={sectionHeight} scrollYProgress={scrollYProgress} />
      }
    </motion.section>
  )
}