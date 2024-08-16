import { motion } from 'framer-motion';

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

export function AboutHeader() {
  return (
    <motion.header 
      className="px-[16vw]"
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div 
        className="
          pt-[175px] md:pt-[200px] lg:pt-[225px] xl:pt-[250px] 2xl:pt-[300px]
          pb-[75px] md:pb-[100px] lg:pb-[125px] xl:pb-[150px] 2xl:pb-[200px]
        ">
        <div className="font-nanumsquare relative">
          <h1 
            className="
              flex flex-col gap-2 md:gap-4 font-bold text-white
              text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
            ">
            <span>누구에게나 만족스러운 경험을</span>
            <span>제공하기 위해 코드를 작성합니다.</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#555]" />
    </motion.header>
  )
}