'use client';

import { useRef } from "react";

import { motion } from 'framer-motion';

import { useEducationShade } from "@/hooks"

export function Education() {
  const containerRef = useRef<HTMLElement>(null);
  const { transformY } = useEducationShade(containerRef);

  return (
    <section ref={containerRef} className='relative min-h-screen z-10 bg-white'>
      <div className='relative mt-auto'>
        
      </div>
    </section>
  )
}