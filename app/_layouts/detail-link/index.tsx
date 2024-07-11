'use client';

import Link from "next/link";

import { Github } from "lucide-react";
import { MagneticButton } from "@/components";

export function DetailLink({
  link
}: {
  link: string
}) {
  return (
    <div className="fixed bottom-[20px] right-[20px] z-[200000]">
      <MagneticButton>
        <Link
          href={link}
          target="_blank"
        >
          <MagneticButton className="text-white rounded-full p-[12px] bg-black flex items-center justify-center group">
            <Github width={40} height={40} className="group-hover:scale-125 transition-all"/>
          </MagneticButton>
        </Link>
      </MagneticButton>
    </div>
  )
}