'use client';

import { useRef } from "react";

import { useScroll } from "framer-motion";

import { 
  DetailHeader,
  DetailLive,
  DetailScreens,
  DetailLearns,
  DetailHilight,
  DetailRole,
  DetailLink,
} from "@/layouts";

export function FramerWrapper({
  title,
  introduce,
  period,
  members,
  skills,
  links,
  images,
  hilight,
  role,
  learns,
}: {
  title: string,
  introduce: string,
  period: { from: string, to: string }, 
  members: string,
  skills: string[],
  links: { live?: string, github: string },
  images: { name: string, src: string }[],
  hilight?: { type: string, src: string },
  role: { category: string, detail: string[] }[],
  learns: { main: string, sub: string[] }[],
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  return (
    <div ref={containerRef}>
      <DetailHeader title={title} introduce={introduce} period={period} members={members} skills={skills} />
      <main>
        <DetailLive live={links.live} scrollYProgress={scrollYProgress} />
        <DetailLink link={links.github} />
        {images.length > 0 ? <DetailScreens images={images} /> : null}
        {hilight && <DetailHilight hilight={hilight} />}
        <DetailRole role={role} isAlone={members === '개인 프로젝트'} />
        {learns?.length > 0 ? <DetailLearns learns={learns} /> : null}
      </main>
    </div>
  )
};