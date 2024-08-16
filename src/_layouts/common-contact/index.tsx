import { useRef } from 'react';

import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

import { Content, SocialInfo } from './components';

export function CommonContact() {
  const target = useRef(null);

  const minHeight = 550;
  const heightRate = 0.7;

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'end end'],
  });

  const footerTransformY = useTransform(scrollYProgress, [0, 1], [-minHeight * heightRate, 0]);
  const footerClipPathTop = useTransform(scrollYProgress, [0, 1], [heightRate * 100, 0]);
  const footerClipPath = useMotionTemplate`polygon(0% ${footerClipPathTop}%, 100% ${footerClipPathTop}%, 100% 100%, 0% 100%)`;

  const shapeTransformY = useTransform(scrollYProgress, [0, 1], [minHeight * heightRate, 0]);
  const shapeHeight = useTransform(scrollYProgress, [0, 1], [minHeight * 0.85, 0]);

  return (
    <motion.footer
      ref={target}
      className='relative flex flex-col bg-white px-[4vw] pt-[200px] -mt-[1px]'
      style={{
        minHeight: minHeight,
        y: footerTransformY,
        clipPath: footerClipPath,
      }}
    >
      <motion.div
        className='absolute w-[150vw] -top-[1px] -left-[25vw] bg-[#232727] shadow-2xl z-10'
        style={{
          borderRadius: '50% / 0 0 100% 100%',
          height: shapeHeight,
          y: shapeTransformY,
        }}
      />
      <Content scrollYProgress={scrollYProgress} />
      <SocialInfo />
    </motion.footer>
  )
}