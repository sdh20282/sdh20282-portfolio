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

export function DetailFramerWrapper({
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
  hilight: { type: string, src: string },
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
        <DetailScreens images={images} />
        <DetailHilight hilight={hilight} />
        <DetailRole role={role} />
        <DetailLearns learns={learns} />
      </main>
    </div>
  )
};