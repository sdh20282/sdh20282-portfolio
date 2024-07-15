'use client';

import { useRef } from "react";

import {
  HomeHeader,
  HomeIntroduce,
  HomeProjectThumbnails,
  HomeRecentWorks,
} from "@/layouts";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HomeHeader />
      <main ref={containerRef}>
        <HomeIntroduce target={containerRef} />
        <HomeRecentWorks />
        <HomeProjectThumbnails />
      </main>
    </>
  );
}
