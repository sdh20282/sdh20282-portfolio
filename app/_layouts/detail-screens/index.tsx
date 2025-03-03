'use client';

import Image from "next/image";

import { motion } from "framer-motion";

import { randomId } from "@/utils";

const reveal = {
  hidden: {
    y: '100px',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { 
      duration: 0.35,
    },
  }
};

const slideUp = {
  initial: {
    y: 500,
  },
  enter: {
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.7
    },
  },
};

function ProjectImage({
  image
}: {
  image: { name: string, src: string }
}) {
  
  return (
    <motion.div
      className="relative w-full aspect-video overflow-hidden group rounded-md"
      variants={reveal}
      viewport={{ once: true }}
      initial='hidden'
      whileInView='visible'
    >
      <Image 
        src={image.src}
        alt={image.name}
        fill
        unoptimized
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[#232727] transition-all duration-300 bg-opacity-0 *:opacity-0 group-hover:bg-opacity-75 group-hover:*:opacity-100 flex items-center justify-center">
        <span className="font-nanumsquare text-white text-xl transition-all duration-300">{image.name}</span>
      </div>
    </motion.div>
  )
}

export function DetailScreens({
  images,
}: {
  images: { name: string, src: string }[],
}) {
  return (
    <motion.div 
      className="px-[8vw] py-[200px]"
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <div className="flex flex-col gap-[150px]">
        {
          images.map(image => {
            return (
              <ProjectImage key={randomId()} image={image}/>
            )
          })
        }
      </div>
    </motion.div>
  )
}