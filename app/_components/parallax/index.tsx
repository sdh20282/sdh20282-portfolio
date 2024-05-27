"use client";
import { HTMLAttributes, useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useWindowSize } from "@uidotdev/usehooks";

export function Parallax({ children, speed = 1, id = "parallax", ...props }: { children: React.ReactNode, speed: number, id?: string } & HTMLAttributes<HTMLDivElement>) {
  const trigger = useRef(null);
  const target = useRef(null);
  const timeline = useRef<any>(null);
  
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const y = windowWidth! * speed * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");

    timeline.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => {
          setY(e.progress * y);
        },
      },
    });

    return () => {
      timeline?.current?.kill();
    };
  }, [id, speed, windowWidth]);

  return (
    <div ref={trigger} {...props}>
      <div ref={target}>{children}</div>
    </div>
  );
}