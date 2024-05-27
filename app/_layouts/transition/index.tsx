"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function Transition({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}