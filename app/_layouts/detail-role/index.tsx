'use client';

import { CharTyping, RoleDetail } from "@/components";
import { randomId } from "@/utils";

export function DetailRole({
  role
}: {
  role: { category: string, detail: string[] }[]
}) {
  return (
    <div className="px-[10vw] pt-[200px]">
      <div className="font-nanumsquare text-white font-bold text-3xl">
        <CharTyping paragraph='담당 역할' />
      </div>
      <div className="pt-[100px] flex gap-[75px] lg:gap-[40px] flex-col lg:flex-row">
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