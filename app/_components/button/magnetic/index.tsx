'use client';

import { HTMLAttributes, useRef } from 'react';

import { useMagnetic } from '@/hooks';

export function MagneticButton({ children, ...props }: { children?: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  const magnetic = useRef<HTMLDivElement>(null);

  useMagnetic(magnetic);

  return (
    <div ref={magnetic} {...props}>
      {children}
    </div>
  );
}