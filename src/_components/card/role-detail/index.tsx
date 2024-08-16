import { motion } from "framer-motion";

import { ListText } from "@/components";
import { randomId } from "@/utils";

export function RoleDetail({ 
  category,
  detail,
  index,
  delay = 0.8,
 }: {
  category: string,
  detail: string[],
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
    <div className="flex-grow flex-shrink-0 basis-0">
      <motion.div 
        custom={index}
        variants={revealNumber}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        className="pb-6 text-sm"
      >
        <span className="text-base text-[#777] font-alliance font-bold">{category}</span>
      </motion.div>
      <motion.div 
        custom={index}
        variants={revealDivider}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        className='border-b border-[#777]'
      />
      <motion.div
        custom={index}
        variants={revealContent}
        viewport={{ once: true }}
        initial='hidden'
        whileInView='visible'
        className="w-full flex flex-col gap-1 pt-[50px] text-white"
      >
        {
          detail.map(line => {
            return (
              <ListText key={randomId()} text={line} />
            )
          })
        }
      </motion.div>
    </div>
  )
}