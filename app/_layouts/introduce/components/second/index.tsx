"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

import { SkillPercentageBar } from "@/components";
import { extraSummary, frontendSummary, skillDesc } from "@/data";

export function Second({ 
  windowHeight, 
  sectionHeight, 
  scrollYProgress 
}: { 
  windowHeight: number, 
  sectionHeight: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const wrapperTransformY = useTransform(scrollYProgress, [0, 1], [-windowHeight, sectionHeight - windowHeight]);

  const titleFirstTransformY = useTransform(scrollYProgress, [0, 0.86, 0.91, 1], ["0%", "0%", "100%", "100%"]);
  const titleSecondTransformY = useTransform(scrollYProgress, [0, 0.83, 0.88, 1], ["0%", "0%", "100%", "100%"]);
  const titleThirdTransformY = useTransform(scrollYProgress, [0, 0.8, 0.85, 1], ["0%", "0%", "100%", "100%"]);

  const skillWidth = useTransform(scrollYProgress, [0, 0.78, 0.93, 1], ["100%", "100%", "0%", "0%"]);
  const skillOpacity = useTransform(scrollYProgress, [0, 0.85, 0.95, 1], [1, 1, 0, 0]);

  const introduceLineHeight = useTransform(scrollYProgress, [0, 0.8, 0.95, 1], ["100%", "100%", "0%", "0%"]);
  const introduceTransformY = useTransform(scrollYProgress, [0, 0.86, 0.92, 1], ["0%", "0%", "100%", "100%"]);
  
  const extraSkillTransformInfo = {
    0: {
      transformY: useTransform(scrollYProgress, [0, 0.84, 0.89, 1], ["0%", "0%", "100%", "100%"]),
    },
    1: {
      transformY: useTransform(scrollYProgress, [0, 0.81, 0.86, 1], ["0%", "0%", "100%", "100%"]),
    },
    2: {
      transformY: useTransform(scrollYProgress, [0, 0.78, 0.83, 1], ["0%", "0%", "100%", "100%"]),
    },
    3: {
      transformY: useTransform(scrollYProgress, [0, 0.75, 0.8, 1], ["0%", "0%", "100%", "100%"]),
    }
  };

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-[100vh] bg-[#1c1c1c]"
      style={{
        y: wrapperTransformY,
      }}
    >
      <motion.div
        className="
          absolute flex flex-col gap-4 
          font-bold text-[#04ffd5] text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
          top-[18vh] lg:top-[30vh] xl:top-[25vh] lg:right-[6vw]
          w-full lg:w-fit 
          items-center lg:items-end"
        style={{

        }}
      >
        <div className="overflow-hidden">
          <motion.p
            style={{
              y: titleFirstTransformY
            }}
          >
            활용 가능한
          </motion.p>
        </div>
        <div className="flex lg:flex-col gap-4 lg:items-end">
          <div className="overflow-hidden inline-block">
            <motion.p
              style={{
                y: titleSecondTransformY
              }}
            >
              기술들
            </motion.p>
          </div>
          <div className="overflow-hidden inline-block">
            <motion.p
              style={{
                y: titleThirdTransformY
              }}
            >
              입니다!
            </motion.p>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="
          absolute
          grid gap-y-0 md:gap-y-2 2xl:grid-cols-auto-fit-300 xl:grid-cols-auto-fit-330 lg:grid-cols-auto-fit-250 md:grid-cols-auto-fit-300 sm:grid-cols-auto-fit-250
          text-white text-sm
          w-[80vw] lg:w-[55vw] xl:w-[52vw] 2xl:w-[48vw]
          top-[30vh] md:top-[35vh] lg:top-[27.5vh] xl:top-[23vh]
          left-[50vw] lg:left-[6vw] -translate-x-1/2 lg:translate-x-0
          "
      >
        {
          frontendSummary.map(category => {
            return (
              <SkillPercentageBar
                key={`${category.name}-progress`}
                name={category.name}
                color={category.color}
                percentage={category.percentage}
                widthValue={skillWidth}
                opacityValue={skillOpacity}
              />
            )
          })
        }
      </motion.div>
      <div 
        className="
          absolute my-2 pl-[2vw] py-2
          w-[80vw] lg:w-[55vw] xl:w-[52vw] 2xl:w-[48vw]
          top-[60vh] md:top-[55vh] lg:top-[47.5vh] xl:top-[43vh]
          left-[50vw] lg:left-[7vw] -translate-x-1/2 lg:translate-x-0
          text-white flex flex-col gap-12
          "
        >
          {
            skillDesc.split(`\n`).map((line, lineIndex) => {
              return (
                <div key={"line-" + lineIndex}>
                  {
                    line.split(' ').map((word, wordIndex) => {
                      return (
                        <span key={"word-" + wordIndex} className='me-2 inline-flex overflow-hidden' >
                          <motion.span 
                            style={{
                              // @ts-ignore
                              y: introduceTransformY
                          }}>{word}</motion.span>
                        </span>
                      )
                    })
                  }
                </div>
              )
            })
          }
          <div className="grid grid-cols-2 gap-y-8">
            {
              extraSummary.map((extra, extraIndex) => {
                return (
                  <div key={"extra-" + extraIndex} className="flex flex-col gap-2">
                    <div className="inline-flex overflow-hidden">
                      <motion.span className="uppercase text-[#999]" style={{
                        // @ts-ignore
                        y: extraSkillTransformInfo[extraIndex - 1].transformY
                      }}>{extra?.category}</motion.span>
                    </div>
                    <div className="inline-flex overflow-hidden gap-[10px]">
                      {
                        extra?.list.map((skill, skillIndex) => {
                          // console.log(extraIndex, extraSkillTransformInfo[extraIndex]);
                          

                          return (
                            <motion.span key={skillIndex} style={{
                              // @ts-ignore
                              y: extraSkillTransformInfo[extraIndex - 1].transformY
                            }}>{skill}</motion.span>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
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