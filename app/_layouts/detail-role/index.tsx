'use client';

import { CharTyping, RoleDetail } from "@/components";
import { randomId } from "@/utils";

export function DetailRole({
  role,
  isAlone
}: {
  role: { category: string, detail: string[] }[];
  isAlone: boolean;
}) {
  return (
    <div className="px-[10vw] py-[200px]">
      <div className="font-nanumsquare text-white font-bold text-3xl">
        <CharTyping paragraph={isAlone ? '구현 내용' : '담당 역할'} />
      </div>
      <div className="pt-[100px] gap-[75px] lg:gap-[40px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {
          role.map((r, index) => {
            return (
              <RoleDetail
                key={randomId()}
                category={r.category}
                detail={r.detail}
                index={index}
              />
            )
          })
        }
      </div>
    </div>
  )
}