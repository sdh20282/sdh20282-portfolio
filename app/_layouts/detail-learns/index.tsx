'use client';

import { CharTyping, LearnDetail } from "@/components";
import { randomId } from "@/utils";

export function DetailLearns({
  learns
}: {
  learns: { main: string, sub: string[] }[],
}) {
  return (
    <div className="px-[10vw] pb-[200px]">
      <div className="font-nanumsquare text-white font-bold text-3xl">
        <CharTyping paragraph='성과 및 배운 점' />
      </div>
      <div className="pt-[100px] gap-[75px] lg:gap-[50px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {
          learns.map((learn, index) => {
            return (
              <LearnDetail key={randomId()} main={learn.main} sub={learn.sub} index={index} />
            )
          })
        }
      </div>
    </div>
  )
}