"use client";

import { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";

import { Profile } from "@/assets";
import { introduceMyself } from "@/data";
import { randomId } from "@/utils";

const slideUp = {
  initial: {
    y: 400,
  },
  enter: {
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.65
    },
  },
};

export function AboutIntroduce() {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'end end'],
  });

  const arrowRotate = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, 40]);
  const introduceTransformY = useTransform(scrollYProgress, [0, 0.25, 1], [0, 0, 50]);

  return (
    <motion.section 
      ref={target} 
      className="relative text-white font-nanumsquare  pt-[50px] md:pt-[75px] lg:pt-[150px] px-[8vw] flex flex-col lg:flex-row"
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <motion.div className="absolute hidden text-[#ccc] lg:block top-[140px]" style={{ rotate: arrowRotate }}>
        <MoveRight size="24px" />
      </motion.div>
      <motion.header className="w-full lg:w-[35vw] lg:pl-[8vw] lg:pr-[25px] xl:pr-[50px] text-sm md:text-base px-[8vw] lg:px-0" style={{
          y: introduceTransformY
        }}>
        <h2 className="flex flex-col gap-6">
          {
            introduceMyself.split(`\n`).map(line => {
              return (
                <p key={randomId()}>
                  {
                    line.split(' ').map(word => {
                      return (
                        <span key={randomId()} className='me-1 inline-flex'>{word}</span>
                      )
                    })
                  }
                </p>
              )
            })
          }
        </h2>
      </motion.header>
      <div 
        className="
          relative overflow-hidden flex-grow bg-blue-200
          mt-[100px] md:mt-[150px] lg:mt-0
          h-[90vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] 2xl:h-[120vh]
        "
      >
        <Image
          src={Profile}
          alt='profile image'
          fill={true}
          className='object-cover'
          placeholder="blur"
        />
      </div>
    </motion.section>
  )
}