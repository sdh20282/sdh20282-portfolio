"use client";

import Link from "next/link";

import { useIntersectionObserver } from "@uidotdev/usehooks";

import { thumbnailOptions } from "@/data";
import { useEffect, useState } from "react";

const List = ({ props: {
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
  title,
  id,
}}: {
  props: {
    handlePointerEnter: (index: number) => void,
    handlePointerLeave: (index: number) => void,
    moveItems: (x: number, y: number) => void,
    title: string,
    id: number,
  }
}) => {
  return (
    <li
      className='border-t border-solid last-of-type:border-b transition-all cursor-pointer group animate-thumbnailAppear translate-y-[300px]'
      style={{
        animationDelay: `${id * 0.1}s`,
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
      <Link href="/" className='flex justify-between items-center max-lg:flex-wrap transition-all duration-300 text-[#fff] px-[7vw] py-[8vh] group-hover:px-[5vw] group-hover:text-[#777]'>
        <p
          style={{
            fontSize: 'calc(clamp(3.25em, 4vw, 8em) * 0.75)',
          }}
        >
          {title}
        </p>
        <p className='text-lg font-medium'>Development</p>
      </Link>
    </li>
  )
}

export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems
}: {
  handlePointerEnter: (index: number) => void,
  handlePointerLeave: (index: number) => void,
  moveItems: (x: number, y: number) => void
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
        checked && thumbnailOptions.map(({ title }, index) => {
          return (
            <List
              key={`thumbnail-list-${index}`}
              props={{
                handlePointerEnter,
                handlePointerLeave,
                moveItems,
                title,
                id: index,
              }}
            />
          );
        })
      }
    </ul>
  );
}