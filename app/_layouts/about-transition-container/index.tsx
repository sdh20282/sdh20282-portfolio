'use client';

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { 
  AboutIntroduce,
  AboutSkill,
} from "@/layouts";

export function AboutTransitionContainer() {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'end end'],
  });

  const transformColor = useTransform(scrollYProgress, [0, 0.8, 1], ['#232727', '#232727', "#39444b"]);

  return (
    <motion.div ref={target} style={{
      backgroundColor: transformColor
    }}>
      <AboutIntroduce />
      <AboutSkill />
    </motion.div>
  )
}