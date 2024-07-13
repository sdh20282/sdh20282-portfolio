'use client';

import { useRef } from "react";

import {
  Navbar,
  HomeHeader,
  HomeIntroduce,
  HomeProjectThumbnails,
  HomeRecentWorks,
} from "@/layouts";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <HomeHeader />
      <main ref={containerRef}>
        <HomeIntroduce target={containerRef} />
        <HomeRecentWorks />
        <HomeProjectThumbnails />
      </main>
    </>
  );
}
