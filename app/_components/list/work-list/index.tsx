"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useIntersectionObserver } from "@uidotdev/usehooks";

function List({ props: {
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
  title,
  link,
  year,
  id,
  checked,
}}: {
  props: {
    handlePointerEnter: (index: number) => void,
    handlePointerLeave: (index: number) => void,
    moveItems: (x: number, y: number) => void,
    title: string,
    link: string,
    year: string,
    id: number,
    checked: boolean,
  }
}) {
  return (
    <li
      className='border-t border-[#777] last-of-type:border-b transition-all cursor-pointer group animate-thumbnailAppear translate-y-[300px]'
      style={{
        animationDelay: `${id * 0.1}s`,
        animationPlayState: checked ? 'running' : 'paused',
      }}
      onPointerEnter={({ clientX, clientY }) => {
        handlePointerEnter(id);
        moveItems(clientX, clientY);
      }}
      onPointerLeave={({ clientX, clientY }) => {
        handlePointerLeave(id);
        moveItems(clientX, clientY);
      }}
    >
      <Link href={`/work/${link}`} className='flex justify-between items-center max-lg:flex-wrap transition-all duration-300 text-[#fff] px-[7vw] py-[50px] md:py-[75px] group-hover:px-[5vw] group-hover:text-[#777]' passHref>
        <p className="text-3xl md:text-4xl xl:text-5xl">{title}</p>
        <p className='text-sm md:text-2xl'>{year}</p>
      </Link>
    </li>
  )
}

export function WorkList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
  options,
}: {
  handlePointerEnter: (index: number) => void,
  handlePointerLeave: (index: number) => void,
  moveItems: (x: number, y: number) => void,
  options: { title: string, link: string, year: string }[]
}) {
  const [checked, setChecked] = useState(false);

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (checked) {
      return;
    }

    if (entry?.isIntersecting) {
      setChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry?.isIntersecting]);

  return (
    <ul ref={ref}>
      {
        options.map(({ title, link, year }, index) => {
          return (
            <List
              key={`thumbnail-list-${index}`}
              props={{
                handlePointerEnter,
                handlePointerLeave,
                moveItems,
                title,
                link,
                year,
                id: index,
                checked: checked,
              }}
            />
          );
        })
      }
    </ul>
  );
}