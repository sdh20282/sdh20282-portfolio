'use client';

import { AnimatePresence } from "framer-motion";

export function AnimatePresenceProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AnimatePresence initial={true} mode="wait">
      {children}
    </AnimatePresence>
  )
}