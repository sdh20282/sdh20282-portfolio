import { Ref, forwardRef } from 'react';

import { Variants, motion } from 'framer-motion';

function _CursorFollowCircle ({
  variants,
  active,
  ...props
}: {
  variants:
  Variants,
  active:
  boolean
}, ref: Ref<HTMLDivElement>
) {
  return (
    <motion.div
      ref={ref}
      className='bg-[#04ffd5] rounded-full flex justify-center items-center w-[5rem] h-[5rem] text-sm fixed z-[500] pointer-events-none'
      variants={variants}
      initial='initial'
      animate={active ? 'enter' : 'closed'}
      {...props}
    />
  );
}

export const CursorFollowCircle = forwardRef(_CursorFollowCircle);

function _CursorFollowLabel ({
  children,
  variants,
  active,
  ...props
}: {
  children: React.ReactNode,
  variants: Variants,
  active: boolean }, 
  ref: Ref<HTMLDivElement>
) {
  return (
    <motion.div
      ref={ref}
      className='flex justify-center items-center w-[5rem] h-[5rem] text-sm fixed pointer-events-none z-[1000]'
      variants={variants}
      initial='initial'
      animate={active ? 'enter' : 'closed'}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const CursorFollowLabel = forwardRef(_CursorFollowLabel);