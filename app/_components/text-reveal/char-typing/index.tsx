"use client";

import { motion } from "framer-motion";

import { randomId } from "@/utils";

export function CharTyping({
  paragraph,
}: {
  paragraph: string
}) {
  const letters = Array.from(paragraph);

  const container = {
    hidden: { 
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 * i },
    }),
  };
  
  const child = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.span
      className="overflow-hidden"
      variants={container}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
    >
      {
        letters.map((letter) => {
          return (
            <motion.span 
              key={randomId()} 
              className="inline-block" 
              variants={child}
            >
               {letter === " " ? "\u00A0" : letter}
            </motion.span>
          )
        })
      }
    </motion.span>
  );
};