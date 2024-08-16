import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { motion, AnimatePresence, Variants } from 'framer-motion';

import { text, translate } from './anim';

const anim = (variants: Variants) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit"
  }
}

const curve = (initialPath: string, targetPath: string) => {
  return {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
      d: initialPath,
      transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
    }
  }
}

const SVG = ({
  height,
  width
}: {
  height: number,
  width: number,
}) => {
  const initialPath = `
    M0 300 
    Q${width/2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width/2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width/2} 0 ${width} 300
    L${width} ${height}
    Q${width/2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg {...anim(translate)} className='fixed left-0 top-0 pointer-events-none z-[200]' style={{ width: '100vw', height: 'calc(100vh + 600px)' }}>
      <motion.path {...anim(curve(initialPath, targetPath))} fill='#000' />
    </motion.svg>
  )
}

export function PageTransition({
  children
}: {
  children?: React.ReactNode
}) {
  const pathname = usePathname();

  const [dimensions, setDimensions] = useState<{
    width: number,
    height: number,
  }>({
    width: -1,
    height: -1
  })

  useEffect( () => {
    function resize(){
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
        window.removeEventListener("resize", resize);
    }
  }, []);

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div key={pathname}>
        <motion.p className='fixed top-[40%] left-1/2 -translate-x-1/2 text-white text-4xl z-[350000] text-center' {...anim(text)}>
          {"sdh20282's portfolio"}
        </motion.p>
        {(dimensions.width !== -1 && dimensions.height !== -1) && <SVG key={pathname} {...dimensions}/>}
        <>{children}</>
      </motion.div>
    </AnimatePresence>
  );
};
