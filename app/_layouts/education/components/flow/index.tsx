"use client";

import { motion, MotionValue, useTransform } from "framer-motion"

export function Flow({ 
  windowHeight, 
  sectionHeight, 
  scrollYProgress
}: {
  windowHeight: number, 
  sectionHeight: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const wrapperTransformY = useTransform(scrollYProgress, [0, 1], [-windowHeight, sectionHeight - windowHeight]);

  return (
    <motion.div
      className="absolute overflow-hidden top-0 left-0 w-full h-[100vh] bg-[#1c1c1c] text-white"
      style={{
        y: wrapperTransformY,
      }}
    >
      asdf
    </motion.div>
  )
}