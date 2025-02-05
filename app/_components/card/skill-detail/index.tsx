'use client';

import { motion } from "framer-motion";

import { skillOptions } from "@/data";
import { randomId } from "@/utils";
import { ListText } from "@/components";

export function SkillDetailCard({ 
  name,
  percentage,
  color,
  index,
  delay = 1,
 }: {
  name: string,
  percentage: number,
  color: string,
  index: number,
  delay?: number,
 }) {
  const revealCard = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: delay * (i),
        duration: delay,
      },
    })
  };

  const revealTitle = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: delay * i,
        type: "spring",
        stiffness: 200,
        damping: 50
      },
    })
  };

  const revealPercent = {
    hidden: (i: number) => ({
      backgroundColor: color,
      x: '-100%',
    }),
    visible: (i: number) => {
      console.log(delay * 0.9 * (percentage / 100));
      

      return {
        backgroundColor: color,
        x: '0%',
        transition: {
          delay: (delay * i),
          duration: delay * (percentage / 100),
        },
      }
    }
  };

  const revealPercentageBackground = {
    hidden:{
      x: '-100%',
    },
    visible: (i: number) => ({
      x: '0%',
      transition: {
        delay: (delay * i),
        duration: delay,
      },
    })
  }

  const revealContent = {
    hidden: {
      y: '10px',
      opacity: 0,
    },
    visible: (i: number) => ({
      y: '0px',
      opacity: 1,
      transition: {
        delay: delay * i,
        type: "spring",
        stiffness: 200,
        damping: 50
      },
    })
  };

  return (
    <div
      className="w-full flex flex-col overflow-hidden"
    >
      <motion.div
        custom={index}
        variants={revealTitle}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        className="relative text-base lg:text-xl mb-5"
      >
        <p>{name}</p>
      </motion.div>
      <div className="w-full mb-8 relative">
        <motion.div
          custom={index}
          variants={revealPercent}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          className='absolute top-0 left-0 h-[4px] rounded-sm z-50'
          style={{
            width: `${percentage}%`,
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-[4px] rounded-sm bg-[#777]"
          custom={index}
          variants={revealPercentageBackground}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
        />
      </div>
      <div className="text-sm hidden md:flex flex-col gap-2">
        {
          // @ts-ignore
          skillOptions[name].split('\n').map((line, i) => {
            return (
              <motion.div
                key={randomId()}
                custom={index + i * 0.2}
                variants={revealContent}
                viewport={{ once: true }}
                initial='hidden'
                whileInView='visible'
              >
                <ListText text={line} />
              </motion.div>
            )
          })
        }
      </div>
      
    </div>
  )
}