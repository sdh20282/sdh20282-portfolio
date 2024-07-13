"use client";

import { CharTyping, SkillDetailCard } from '@/components';
import { randomId } from '@/utils';
import { extraSummary, frontendSummary } from '@/data';

export function AboutSkill() {
  return (
    <section
      className='relative py-[200px] px-[8vw]'
    >
      <div className='pb-[100px]'>
        <h2 className='font-rubik text-white text-4xl'>
          <CharTyping paragraph='SKILLS' />
        </h2>
      </div>
      <div 
        className="
          w-full text-white grid
          gap-[50px] lg:gap-[70px]
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
        "
      >
        {
          frontendSummary.map((skill, index) => {
            return (
              <SkillDetailCard
                key={randomId()}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                index={index}
              />
            )
          })
        }
      </div>
    </section>
  )
}