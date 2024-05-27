"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";

import { useParallaxSlider } from "@/hooks";
import { randomId } from "@/utils";

export function ParallaxSlider({ children, repeat = 2, baseVelocity }: { children: React.ReactNode, repeat: number, baseVelocity: number }) {
  const x = useParallaxSlider(baseVelocity);

  return (
    <div className='flex flex-nowrap overflow-hidden whitespace-nowrap'>
      <motion.div style={{ x }}>
        {
          Array.from({ length: repeat }, () => {
            return <Fragment key={randomId()}>{children}</Fragment>;
          })
        }
      </motion.div>
    </div>
  );
}