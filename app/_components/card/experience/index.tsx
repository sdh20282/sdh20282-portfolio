'use client';

import { motion } from 'framer-motion';

import { ListText } from '@/components';
import { randomId } from "@/utils";

export function ExperienceCard({
  experience,
  index,
  delay = 0.8,
}: {
  experience: {
    name: string,
    duration: string,
    description: string,
    activities?: string[],
  },
  index: number,
  delay?: number,
}) {
  const revealNumber = {
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

  const revealDivider = {
    hidden: {
      width: '0'
    },
    visible: (i: number) => ({
      width: '100%',
      transition: {
        delay: delay * i,
        duration: delay
      },
    })
  };

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
    <div>
      <motion.div 
        custom={index}
        variants={revealNumber}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        className="text-sm text-[#777] pb-8"
      >
        <span>{'0' + (index + 1)}</span>
      </motion.div>
      <motion.div 
        custom={index}
        variants={revealDivider}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        className='border-b border-[#777]'
      /><div className="font-gothica1 text-base leading-6 text-white tracking-wide">
        <motion.div 
          className="py-16 font-bold text-xl lg:text-2xl xl:text-3xl"
          custom={index}
          variants={revealContent}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
        >
          {
            experience.name.split(`\n`).map(line => {
              return (
                <p key={randomId()}>{line}</p>
              )
            })
          }
          <span className="text-[#999] text-xs mt-2 block w-full">{experience.duration}</span>
        </motion.div>
        <motion.div
          custom={index + 0.3}
          variants={revealContent}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
        >
          {
            experience.description.split(`\n`).map(line => {
              return (
                <div key={randomId()}>
                  <p>{line}</p>
                </div>
              )
            })
          }
        </motion.div>
        {
          experience.activities &&
          <motion.div
            className="mt-12 flex flex-col gap-1"
            custom={index + 0.6}
            variants={revealContent}
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
          >
            <p className="text-[#999] font-rubik uppercase text-xs mb-2">activities</p>
            {
              experience.activities.map(item => {
                return (
                  <ListText key={randomId()} text={item} />
                )
              })
            }
          </motion.div>
        }
      </div>
      
    </div>
  )
}