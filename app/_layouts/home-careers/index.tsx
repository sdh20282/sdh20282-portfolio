'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

import { motion } from 'framer-motion';

import { useIntersectionObserver } from "@uidotdev/usehooks";

import { careerDetail } from "@/data";
import { TitleSlider, WordMove } from "@/components";

const appearHover = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  closed: {
    opacity: 0,
    transition: { 
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1],
    },
  }
}

function List({
  name,
  id,
  checked,
}: {
  name: string;
  id: number;
  checked: boolean;
}) {
  const [hover, setHover] = useState(false);

  const detail = careerDetail[name as keyof typeof careerDetail];

  const handleHoverStart = () => {
    setHover(true);
  }

  const handleHoverEnd = () => {
    setHover(false);
  }  

  return (
    <li 
      className='border-t border-[#777] last-of-type:border-b transition-all cursor-pointer animate-thumbnailAppear translate-y-[300px]'
      style={{
        animationDelay: `${id * 0.1}s`,
        animationPlayState: checked ? 'running' : 'paused',
      }}
    >
      <div
        className="relative group overflow-hidden"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <Link
          href={`/career?target=${name}`}
          className={`w-full flex flex-col items-start md:flex-row justify-between md:items-center max-lg:flex-wrap transition-all duration-300 text-[#fff] px-[7vw] py-[50px] md:py-[75px] group-hover:text-[#666]`}
        >
          <p className="flex flex-col text-left gap-1 lg:gap-3">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">{detail.name}</span>
            <span className="text-sm lg:text-base">{detail.description}</span>
          </p>
          <p className="mt-4 md:mt-0 text-sm lg:text-base">
            <span>{detail.period.from}</span>
            <span>~</span>
            <span>{detail.period.to}</span>
            <span className="font-nanumsquare font-semibold">{`, ${detail.position}`}</span>
          </p>
        </Link>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-rubik uppercase text-2xl md:text-3xl lg:text-4xl font-semibold pointer-events-none"
          variants={appearHover}
          animate={hover ? 'enter' : 'closed'}
        >
          <TitleSlider repeat={24} baseVelocity={1}>
            <span
              className={`pe-12`} 
              style={{
                transition: 'all 300'
              }}
            >
              <span>click to show more details about {detail.name}</span>
              <span className='ml-12'>-</span>
            </span>
          </TitleSlider>
        </motion.div>
      </div>
    </li>
  )
}

export function CareerList() {
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

  const careers = Object.keys(careerDetail);  

  return (
    <ul ref={ref}>
      {
        careers.map((key, index) => {
          return (
            <List
              key={key}
              name={key}
              id={index}
              checked={checked}
            />
          )
        })
      }
    </ul>
  )
} 

export function HomeCareers() {
  return (
    <section
      id='projects'
      className='relative w-full px-[8vw] text-white flex flex-col z-30'
    >
      <header className='w-full uppercase text-[#04ffd5] text-sm'>
        <h2>
          <WordMove paragraph={'Careers'} gap={10} />
        </h2>
      </header>
      <div className='flex flex-col w-full mt-[50px] mb-[150px]'>
        <CareerList />
      </div>
    </section >
  );
}