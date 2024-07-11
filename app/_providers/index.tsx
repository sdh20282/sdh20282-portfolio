"use client";

import {
  WrapBalancerProvider,
  LenisProvider
 } from "./components"

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <WrapBalancerProvider>
      <LenisProvider>
          {children}
      </LenisProvider>
    </WrapBalancerProvider>
  );
}