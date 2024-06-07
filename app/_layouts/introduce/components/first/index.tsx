"use client"

import { introduceMyself } from "@/data";
import { motion, MotionValue, useTransform } from "framer-motion";

export function First({ 
  windowHeight, 
  sectionHeight, 
  scrollYProgress 
}: { 
  windowHeight: number, 
  sectionHeight: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const wrapperTransformY = useTransform(scrollYProgress, [0, 1], [-windowHeight, sectionHeight - windowHeight]);
  const wrapperHeight = useTransform(scrollYProgress, [0, 0.425, 0.575, 1], [ windowHeight, windowHeight, 0, 0]);
  const wrapperBorderColor = useTransform(scrollYProgress, [0, 0.425, 0.475, 0.525, 0.575, 1], ["#1c1c1c", "#1c1c1c", "#ffffff", "#ffffff", "#1c1c1c", "#1c1c1c"]);

  const titleFirstTransformY = useTransform(scrollYProgress, [0, 0.12, 0.2, 1], ["100%", "100%", "0%", "0%"]);
  const titleSecondTransformY = useTransform(scrollYProgress, [0, 0.17, 0.25, 1], ["100%", "100%", "0%", "0%"]);
  const titleThirdTransformY = useTransform(scrollYProgress, [0, 0.22, 0.3, 1], ["100%", "100%", "0%", "0%"]);

  const introduceTransformInfo = {
    0: {
      transformY: useTransform(scrollYProgress, [0, 0.2, 0.24, 1], ["100%", "100%", "0%", "0%"]),
    },
    1: {
      transformY: useTransform(scrollYProgress, [0, 0.23, 0.27, 1], ["100%", "100%", "0%", "0%"]),
    },
    2: {
      transformY: useTransform(scrollYProgress, [0, 0.26, 0.3, 1], ["100%", "100%", "0%", "0%"]),
    }
  };

  const introduceLineHeight = useTransform(scrollYProgress, [0, 0.2, 0.31, 1], ["0%", "0%", "100%", "100%"]);

  return (
    <motion.div
      className="absolute overflow-hidden top-0 left-0 w-full bg-[#1c1c1c] border-b-2 border-[#fff]"
      style={{
        height: wrapperHeight,
        y: wrapperTransformY,
        borderColor: wrapperBorderColor,
      }}
    >
      <motion.div
        className="
          absolute flex flex-col gap-4 
          font-bold text-[#04ffd5] text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
          top-[18vh] lg:top-[30vh] xl:top-[25vh] lg:left-[6vw]
          w-full lg:w-fit
          items-center lg:items-start"
      >
        <div className="overflow-hidden">
          <motion.p
            style={{
              y: titleFirstTransformY
            }}
          >
            안녕하세요!
          </motion.p>
        </div>
        <div className="flex lg:flex-col gap-4">
          <div className="overflow-hidden inline-block">
            <motion.p
              style={{
                y: titleSecondTransformY
              }}
            >
              FE 개발자
            </motion.p>
          </div>
          <div className="overflow-hidden inline-block">
            <motion.p
              style={{
                y: titleThirdTransformY
              }}
            >
              서동현입니다!
            </motion.p>
          </div>
        </div>
      </motion.div>
      <div className="
        absolute flex flex-col gap-4 my-2 pl-[2vw] py-2
        text-white font-gothica1 text-sm xl:text-base text-center lg:text-start
        w-[85vw] lg:w-[40vw] 
        top-[50vh] lg:top-[30vh] xl:top-[25vh]
        left-[50vw] lg:left-[55vw]
        -translate-x-1/2 lg:translate-x-0">
          {
            introduceMyself.split(`\n`).map((line, lineIndex) => {
              return (
                <div key={"line-" + lineIndex}>
                  {
                    line.split(' ').map((word, wordIndex) => {
                      return (
                        <span key={"word-" + wordIndex} className='me-2 inline-flex overflow-hidden' >
                          <motion.span 
                            style={{
                              // @ts-ignore
                              y: introduceTransformInfo[lineIndex].transformY
                          }}>{word}</motion.span>
                        </span>
                      )
                    })
                  }
                </div>
              )
            })
          }
          <motion.div
            className="absolute hidden lg:block h-full w-[1px] bg-[#777] top-0 left-0"
            style={{
              height: introduceLineHeight
            }}
          />
        </div>
    </motion.div>
  )
}

