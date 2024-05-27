'use client';

import { useEffect } from "react";

import gsap from 'gsap';

export function useMagnetic(element: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const target = element.current;

    if (!target) {
      return;
    }

    const xTo = gsap.quickTo(target, "x", { duration: 0.5, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(target, "y", { duration: 0.5, ease: "elastic.out(1, 0.3)" });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = target.getBoundingClientRect();

      const x = (clientX - (left + width / 2)) * 0.35;
      const y = (clientY - (top + height / 2)) * 0.5;

      xTo(x);
      yTo(y);
    }

    const mouseLeave = (e: MouseEvent) => {
      gsap.to(target, { x: 0, duration: 0.3 });
      gsap.to(target, { y: 0, duration: 0.3 });
      
      xTo(0);
      yTo(0);
    }

    target.addEventListener("mousemove", mouseMove);
    target.addEventListener("mouseleave", mouseLeave);

    return () => {
      target.removeEventListener("mousemove", mouseMove);
      target.removeEventListener("mouseleave", mouseLeave);
    }
  }, [element]);
}