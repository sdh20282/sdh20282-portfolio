'use client';

import { useRef } from "react";

import { motion, useScroll } from "framer-motion";

import { useWindowSize } from "@/hooks";

import { First } from "./components/first";
import { Second } from "./components/second";

export function Introduce() {  
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
      className="relative overflow-hidden font-ibmkr -mb-[100vh]"
      id="introduce"
      style={{
        height: sectionHeight,
      }}
    >
      {
        height && <Second windowHeight={height!} sectionHeight={sectionHeight} scrollYProgress={scrollYProgress} />
      }
      {
        height && <First windowHeight={height!} sectionHeight={sectionHeight} scrollYProgress={scrollYProgress} />
      }
    </motion.section>
  )
}