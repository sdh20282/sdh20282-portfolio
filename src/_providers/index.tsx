"use client";

import {
  WrapBalancerProvider,
  LenisProvider,
  PageTransition,
 } from "./components"

export function Providers({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <WrapBalancerProvider>
      <LenisProvider>
        <PageTransition>
          {children}
        </PageTransition>
      </LenisProvider>
    </WrapBalancerProvider>
  );
}