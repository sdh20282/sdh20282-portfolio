'use client';

import { CharTyping, ExperienceCard } from "@/components";
import { experienceDetail } from "@/data";
import { randomId } from "@/utils";

export function AboutExperience() {
  return (
    <section
      className='relative py-[200px] px-[8vw]'
    >
      <div className='pb-[100px]'>
        <h2 className='uppercase font-rubik text-white text-4xl'>
          <CharTyping paragraph='EXPERIENCES & ACTIVITIES' />
        </h2>
      </div>
      <div
        className="w-full gap-[50px] justify-between grid grid-cols-1 lg:grid-cols-3"
      >
        {
          experienceDetail.map((experience, index) => {
            return (
              <ExperienceCard
                key={randomId()}
                experience={experience}
                index={index}
              />
            )
          })
        }
      </div>
    </section>
  )
}