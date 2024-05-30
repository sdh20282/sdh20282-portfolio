'use client';

import Image from 'next/image';

export function ProjectSlider({ type, source }: { type: string, source: string }) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        className='object-cover'
        fill={true}
        alt='project items'
      />
    ) : null;
  const video =
    type === 'video' ? (
      <video
        src={source}
        loop={true}
        controls={false}
        muted={true}
        autoPlay={true}
        width='100%'
        height='100%'
        className='!static !bg-transparent'
      />
    ) : null;

  return (
    <div
      className='flex items-center justify-center relative w-1/4 rounded'
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </div>
  );
}