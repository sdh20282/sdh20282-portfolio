'use client';

import React, { HTMLAttributes, useRef } from 'react';

import { useMagnetic } from '@/app/_hooks/use-magnetic';

export function MagneticButton({ children, ...props }: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  const magnetic = useRef<HTMLDivElement>(null);

  useMagnetic(magnetic);

  return (
    <div ref={magnetic} {...props}>
      {children}
    </div>
  );
}