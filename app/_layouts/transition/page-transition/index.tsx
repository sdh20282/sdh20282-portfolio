'use client';

import { useEffect } from 'react';

import { Curve } from '@/components';

export function PageTransition({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Curve />
      {children}
    </>
  );
}