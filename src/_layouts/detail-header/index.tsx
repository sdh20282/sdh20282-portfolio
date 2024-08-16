import { motion } from 'framer-motion';

import { randomId } from "@/utils";

const slideUp = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.6
    },
  },
};

const slideUpContent = {
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

function AdditionalInfo({
  title,
  children
}: {
  title: string,
  children?: React.ReactNode,
}) {
  return (
    <div className="w-full flex flex-col">
      <p className="font-rubik text-sm text-[#777]">{title}</p>
      <div className="w-full h-[1px] my-[30px] bg-[#777]" />
      {children}
    </div>
  )
}

export function DetailHeader({
  title,
  introduce,
  period,
  members,
  skills,
}: {
  title: string,
  introduce: string,
  period: { from: string, to: string }, 
  members: string,
  skills: string[],
}) {
  return (
    <header 
      className="w-full pt-[250px] px-[16vw]"
    >
      <motion.h1 
        className="text-white"
        variants={slideUp}
        initial='initial'
        animate='enter'
      >
        <p className="font-rubik text-5xl md:text-6xl lg:text-7xl mb-[20px]">{title}</p>
        <span className="font-nanumsquare text-sm text-[#aaa]">{introduce}</span>
      </motion.h1>
      <motion.div 
        className="text-[#ddd] pt-[100px] xl:pt-[120px] pb-[150px] grid grid-cols-1 md:grid-cols-3 gap-[60px]"
        variants={slideUpContent}
        initial='initial'
        animate='enter'
      >
        <AdditionalInfo title="Duration">
          <div>
            <span>{period.from}</span>
            <span>~</span>
            <span>{period.to}</span>
          </div>
        </AdditionalInfo>
        <AdditionalInfo title="Participants">
          <div>
            <span>{members}</span>
          </div>
        </AdditionalInfo>
        <AdditionalInfo title="Major Skills">
          <div className="flex flex-wrap *:mr-[10px]">
            {
              skills.map(skill => {
                return (
                  <span key={randomId()}>{skill}</span>
                )
              })
            }
          </div>
        </AdditionalInfo>
      </motion.div>
    </header>
  )
}