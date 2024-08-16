import { motion } from 'framer-motion';

import { ListText } from '@/components';
import { randomId } from '@/utils';

export function LearnDetail({
  main,
  sub,
  index,
  delay = 0.5,
}: {
  main: string,
  sub: string[],
  index: number,
  delay?: number,
}) {
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
    <motion.div 
      custom={index}
      variants={revealContent}
      viewport={{ once: true }}
      initial='hidden'
      whileInView='visible'
      className="flex-grow flex-shrink-0 basis-0"
    >
      <p className='font-nanumsquare text-white text-lg xl:text-xl'>{main}</p>
      <div className='text-white mt-5 flex flex-col gap-1'>
        {
          sub.map(line => {
            return (
              <ListText key={randomId()} text={line} />
            )
          })
        }
      </div>
    </motion.div>
  )
}