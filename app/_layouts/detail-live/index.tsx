'use client';

import { motion, MotionValue, useTransform } from "framer-motion";

import { MagneticButton } from "@/components";

export function DetailLive({
  live = '',
  scrollYProgress
}: {
  live?: string,
  scrollYProgress: MotionValue,
}) {
  const liveLinkTransformY = useTransform(scrollYProgress, [0, 1], [150, -500]);

  return (
    <>
      {
        live &&
        <div className="relative w-full z-50">
          <motion.a
            href={live}
            target="_blank"
            className="absolute top-0 right-[12vw]"
            style={{
              y: liveLinkTransformY
            }}
          >
            <MagneticButton 
              className="
                relative w-[175px] h-[175px] rounded-full bg-[#04ffd5] overflow-hidden 
                before:w-[175px] before:h-[175px] before:absolute before:top-[175px] before:left-0 before:bg-[#1de6c4] before:rounded-[45%] before:transition-all before:duration-0 before:ease-in-out hover:before:top-0 hover:before:duration-300
                after:w-[175px] after:h-[175px] after:absolute after:-top-[175px] after:left-0 after:bg-[#1de6c4] after:rounded-[45%] after:transition-all after:duration-300 after:delay-0 hover:after:top-0 hover:after:duration-0 hover:after:delay-300
              "
            >
              <MagneticButton className="absolute z-10 w-[175px] h-[175px] top-0 left-0 rounded-full flex items-center justify-center">
                <span className="text-white flex gap-1 items-center justify-center font-rubik">
                  <span>Live Site</span>
                </span>
              </MagneticButton>
            </MagneticButton>
          </motion.a>
        </div>
      }
    </>
  )
}