import { easeIn, motion } from "framer-motion";

import { randomId } from "@/utils";

export function WordMove({
  paragraph,
  wait = 0,
  delay = 0.01,
  gap = 0,
}: {
  paragraph: string,
  wait?: number,
  delay?: number,
  gap?: number
}) {
  const words = paragraph.split(' ');

  const reveal = {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: (i: number) => ({
      y: '0%',
      opacity: 1,
      transition: { 
        duration: 0.35,
        delay: wait + 0.1 + delay * i
      },
    })
  };

  return (
    <div>
      {
        words.map((word, index) => {
          return (
            <span key={randomId()} className='inline-flex overflow-hidden' style={{ marginRight: gap }}>
              <motion.span
                custom={index}
                variants={reveal}
                viewport={{ once: true }}
                initial='hidden'
                whileInView='visible'
              >
                {word}
              </motion.span>
            </span>
          )
        })
      }
    </div>
  )
}