"use client";

import { useLenis } from "@/hooks";

export function Transition({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <div>
      {children}
    </div>
  );
}