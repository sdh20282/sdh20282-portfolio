import { motion } from "framer-motion";

import { skillOptions } from "@/data";
import { randomId } from "@/utils";
import { ListText } from "@/components";

export function SkillDetailCard({ 
  name,
  percentage,
  color,
  index,
  delay = 0.1,
 }: {
  name: string,
  percentage: number,
  color: string,
  index: number,
  delay?: number,
 }) {
  const progress = Math.floor(percentage / 5);
  const progressDuration = 0.02;
  const progressColors = new Array(20).fill(0).map((_, index) => {
    return index < progress ? color : '#777';
  });

  const revealCard = {
    hidden: {
      y: '100px',
      opacity: 0,
    },
    visible: (i: number) => ({
      y: '0px',
      opacity: 1,
      transition: {
        delay: delay * i,
        type: "spring",
        stiffness: 200,
        damping: 18
      },
    })
  };

  const revealPercent = {
    hidden: {
      y: '0px',
      backgroundColor: '#777',
    },
    visible: (i: number) => ({
      y: '0px',
      backgroundColor: progressColors[i],
      transition: {
        delay: (delay * (i + 1)) + (progressDuration * i),
        type: "spring",
        stiffness: 200,
        damping: 50
      },
    })
  };

  return (
    <motion.div
      custom={index}
      variants={revealCard}
      viewport={{ once: true }}
      initial='hidden'
      whileInView='visible'
      className="
        w-full flex flex-col 
      "
    >
      <div 
        className="
          relative
          text-base lg:text-xl
          mb-5
        "
      >
        <p>{name}</p>
      </div>
      <div className="flex gap-[2px] mb-8">
        {
          new Array(20).fill(0).map((_, index) => {
            return (
              <motion.div 
                key={randomId()} 
                custom={index}
                variants={revealPercent}
                viewport={{ once: true }}
                initial='hidden'
                whileInView='visible'
                className='w-full rounded-[1px] opacity-75 bg-[#555] h-[4px] lg:h-[6px]'
              />
            )
          })
        }
      </div>
      <div className="text-sm hidden md:flex flex-col gap-2">
        {
          // @ts-ignore
          skillOptions[name].split('\n').map(line => {
            return (
              <ListText key={randomId()} text={line} />
            )
          })
        }
      </div>
    </motion.div>
  )
}