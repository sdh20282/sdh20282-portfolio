'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { AnimatePresence } from "framer-motion";

import { MenuToggle, MenuBody } from "./components";

export function CommonMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="hidden md:block">
      <AnimatePresence mode='wait'>
        {isOpen ? <MenuBody /> : null}
      </AnimatePresence>
      <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  )
}