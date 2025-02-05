'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { motion } from 'framer-motion';

import { useIntersectionObserver } from "@uidotdev/usehooks";

import { careerDetail } from "@/data";

const appearContent = {
  initial: {
    height: 0,
  },
  enter: {
    height: 'auto',
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  closed: {
    height: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.6,
    },
  }
}

const appearDetail = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.6
    },
  },
  closed: {
    opacity: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  }
}

function List({
  name,
  id,
  checked,
  selected,
  setSelected,
}: {
  name: string;
  id: number;
  checked: boolean;
  selected: string,
  setSelected: Dispatch<SetStateAction<string>>,
}) {
  const detail = careerDetail[name as keyof typeof careerDetail];
  const active = selected === name;

  const handleClickName = () => {
    setSelected(selected === name ? '' : name);
  }

  return (
    <li 
      className='border-t border-[#777] last-of-type:border-b transition-all cursor-pointer animate-thumbnailAppear translate-y-[300px]'
      style={{
        animationDelay: `${id * 0.1}s`,
        animationPlayState: checked ? 'running' : 'paused',
      }}
    >
      <button
        className='w-full flex flex-col items-start md:flex-row justify-between md:items-center max-lg:flex-wrap transition-all duration-300 text-[#fff] px-[7vw] py-[50px] md:py-[75px]'
        onClick={handleClickName}
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
      </button>
      <motion.div
        className="overflow-hidden"
        variants={appearContent}
        animate={active ? 'enter' : 'closed'}
      >
        <motion.div
          className="font-nanumsquare"
          variants={appearDetail}
          animate={active ? 'enter' : 'closed'}
        >
          {detail.works.map(work => {
            return (
              <div key={work.description} className="flex flex-col lg:flex-row text-[#fff] px-[7vw] py-[50px] md:py-[75px] gap-16 lg:gap-20">
                <div className="w-full">
                  <div className="flex flex-wrap items-baseline lg:flex-col justify-between">
                    <p className="font-semibold text-xl lg:text-2xl">{work.title}</p>
                    <p className="text-[#aaa] text-sm lg:text-base">
                      <span>{work.period.from}</span>
                      <span>~</span>
                      <span>{work.period.to}</span>
                    </p>
                  </div>
                  <p className="mt-4 text-sm lg:text-base">{work.description}</p>
                </div>
                <div className="w-full flex flex-col gap-4">
                  {work.details.map(detail => {
                    return (
                      <div key={detail.main} className="text-sm lg:text-base">
                        <p>{detail.main}</p>
                        {detail.subs.length > 0 && (
                          <div className="ml-2">
                            {
                              detail.subs.map(sub => {
                                return (
                                  <div key={sub} className="flex">
                                    <div className="w-4 font-rubik">•</div>
                                    <p>{sub}</p>
                                  </div>
                                )
                              })
                            }
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </motion.div>
      </motion.div>
    </li>
  )
}

export function CareerList() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("");
  
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
              selected={selected}
              setSelected={setSelected}
            />
          )
        })
      }
    </ul>
  )
} 