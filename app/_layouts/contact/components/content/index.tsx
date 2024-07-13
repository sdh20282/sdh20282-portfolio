'use client';

import Link from "next/link";

import { motion, MotionValue, useTransform } from "framer-motion";

import { Magnetic } from "@/components";

export function Content({
  scrollYProgress
}: {
  scrollYProgress: MotionValue
}) {
  const circleTransformX = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <div className='px-[11vw]'>
      <div className="flex mb-[100px]">
        <h3 className='flex flex-col gap-[10px] font-extrabold text-4xl md:text-6xl font-nanumsquare'>
          <span>지금까지</span>
          <span>프론트엔드 개발자</span>
          <span>서동현이었습니다</span>
        </h3>
      </div>
      <motion.div
        className="relative w-full h-[1px] bg-[#999]"
      >
        <motion.div 
          className="absolute top-0 right-[185px]"
          style={{
            x: circleTransformX
          }}
        >
          <Link
            href='mailto:sdh20282@gmail.com'
            target="_blank"
            className="absolute -translate-y-1/2"
          >
            <Magnetic 
              className="
                relative w-[175px] h-[175px] rounded-full bg-[#04ffd5] overflow-hidden 
                before:w-[175px] before:h-[175px] before:absolute before:top-[175px] before:left-0 before:bg-[#1de6c4] before:rounded-[45%] before:transition-all before:duration-0 before:ease-in-out hover:before:top-0 hover:before:duration-300
                after:w-[175px] after:h-[175px] after:absolute after:-top-[175px] after:left-0 after:bg-[#1de6c4] after:rounded-[45%] after:transition-all after:duration-300 after:delay-0 hover:after:top-0 hover:after:duration-0 hover:after:delay-300
              "
            >
              <Magnetic className="absolute z-10 w-[175px] h-[175px] top-0 left-0 rounded-full flex items-center justify-center">
                <span className="text-white flex gap-1 items-center justify-center font-rubik">
                  <span>Send Mail</span>
                </span>
              </Magnetic>
            </Magnetic>
          </Link>
        </motion.div>
        
      </motion.div>
      <div className="mt-[100px]">
      <p className="font-nanumsquare text-base">누구에게나 만족스러운 경험을 제공하기 위해 코드를 작성합니다.</p>
      </div>
    </div>
  )
}