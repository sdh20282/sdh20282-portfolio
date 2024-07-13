"use client";

import { RefObject } from "react";
import Link from "next/link";

import { motion, useScroll, useTransform } from 'framer-motion';

import { Magnetic, WordMove } from "@/components";
import { introduceSub, introduceSummary } from "@/data";
import { randomId } from "@/utils";

export function HomeIntroduce({
  target
}: {
  target: RefObject<HTMLElement>,
}) {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'end end'],
  });

  const aboutMeButtonTransformY = useTransform(scrollYProgress, [0, 1], [100, -300]);

  return (
    <section
      className="
        relative
        py-[250px]
        text-white font-nanumsquare 
        flex 
        flex-col lg:flex-row 
        gap-[75px] lg:gap-[50px]
        px-[8vw] lg:px-[10vw] xl:px-[12vw] 2xl:px-[15vw]
      "
    >
      <header 
        className="
          font-nanumsquare
          text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl
          leading-[40px] lg:leading-[35px] xl:leading-[40px] 2xl:leading-[50px]">
        <h2>
          {
            introduceSummary.split(`\n`).map(line => {
              return (
                <div key={randomId()}>
                  <WordMove paragraph={line} gap={10} />
                </div>
              )
            })
          }
        </h2>
      </header>
      <div className="text-xs font-rubik w-[250px] shrink-0 leading-[25px] text-[#ccc]">
          {
            introduceSub.split(`\n`).map(line => {
              return (
                <div key={randomId()}>
                  <WordMove paragraph={line} gap={4} />
                </div>
              )
            })
          }
      </div>
      <motion.div
        className="absolute right-[16vw] bottom-[200px] lg:bottom-0"
        style={{
          y: aboutMeButtonTransformY
        }}
      >
        <Link href="/about">
          <Magnetic 
            className="
              relative w-[175px] h-[175px] rounded-full bg-[#fff] overflow-hidden 
              before:w-[175px] before:h-[175px] before:absolute before:top-[175px] before:left-0 before:bg-[#04ffd5] before:rounded-[45%] before:transition-all before:duration-0 before:ease-in-out hover:before:top-0 hover:before:duration-300
              after:w-[175px] after:h-[175px] after:absolute after:-top-[175px] after:left-0 after:bg-[#04ffd5] after:rounded-[45%] after:transition-all after:duration-300 after:delay-0 hover:after:top-0 hover:after:duration-0 hover:after:delay-300
            "
          >
            <Magnetic className="absolute z-10 w-[175px] h-[175px] top-0 left-0 rounded-full flex items-center justify-center">
              <span className="text-black flex items-center justify-center font-rubik uppercase">
                <span>About Me</span>
              </span>
            </Magnetic>
          </Magnetic>
        </Link>
      </motion.div>
    </section>
  )
}