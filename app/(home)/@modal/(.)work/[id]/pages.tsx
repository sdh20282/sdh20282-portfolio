'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { X } from "lucide-react";

import { projectDetail } from "@/data";
import {
  DetailHeader,
  DetailHilight,
  DetailLearns,
  DetailRole,
  DetailScreens
} from "@/layouts";

export default function Modal({
  params
}: {
  params: { id: string }
}) {
  const { id } = params;
  // @ts-ignore
  const project = projectDetail[id];
  const router = useRouter();

  useEffect(() => {
    document.body.setAttribute('data-lenis-prevent', '');    

    return () => {
      document.body.removeAttribute('data-lenis-prevent');
    }
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] z-[100] bg-neutral-900 bg-opacity-70 overflow-hidden" data-lenis-prevent="">
      <div className="text-white absolute top-[7vh] right-[6vw] z-10">
        <button onClick={() => {router.back()}}>
          <X width={24} height={24}/>
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vh] border border-[#777] bg-[#232727] rounded-[10px] overflow-y-scroll">
        <DetailHeader title={project.title} introduce={project.introduce} period={project.period} members={project.members} skills={project.skills} />
        <main>
          <DetailScreens images={project.images} />
          <DetailHilight hilight={project.hilight} />
          <DetailRole role={project.role} />
          <DetailLearns learns={project.learns} />
        </main>
      </div>
    </div>
  )
}