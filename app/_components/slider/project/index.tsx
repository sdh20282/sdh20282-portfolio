'use client';

import Image from 'next/image';
import Link from 'next/link';

export function ProjectSlider({
  type,
  source,
  title,
  description,
  link,
}: {
  type: string,
  source: string,
  title: string,
  description: string,
  link: string,
}) {
  const image =
    type === 'image' ? (
      <Image
        src={source}
        alt={title}
        fill
        unoptimized
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
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
    <div className='py-[23px] px-[15px] bg-[#343f45] flex items-center justify-center relative w-1/4 rounded min-w-[150px] h-[20vw] group'>
      <div className='relative w-full aspect-video overflow-hidden'>
        {image}
        {video}
      </div>
      <Link href={link} className="w-full h-full absolute top-0 left-0 bg-[#232727] transition-all duration-300 bg-opacity-0 *:opacity-0 group-hover:bg-opacity-85 group-hover:*:opacity-100" target='_blank' rel='noopener' passHref>
        <div className="w-full h-full font-nanumsquare text-white transition-all duration-300 flex flex-col items-center justify-center gap-[10px]">
          <span className='text-xl font-bold'>{title}</span>
          <span className='text-sm'>{description}</span>
        </div>
      </Link>
    </div>
  );
}