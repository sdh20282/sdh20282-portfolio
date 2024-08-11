import Image from "next/image";

import { LapTop } from "@/assets";

export function DetailHilight({
  hilight,
}: {
  hilight: { type: string, src: string }
}) {
  return (
    <>
      {
        hilight.src &&
        <div className="px-[8vw] py-[200px] bg-[#39444b]">
          <div className="relative w-full">
            <Image 
              src={LapTop}
              alt="laptop image"
              sizes="100vw"
              width={500}
              height={300}
              placeholder="blur"
              className="w-full h-full ml-[1px]"
            />
            <div 
              className="
                w-[74%] h-[91.5%] bg-[#D4D6D8] overflow-hidden
                absolute
                top-[1.5%]
                left-1/2 -translate-x-1/2
              "
              style={{
                borderRadius: '2% 2% 0 0 / 3.5% 3.5% 0 0'
              }}
            >
              <Image 
                src={hilight.src}
                alt="hilight"
                sizes="100vw"
                width={500}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      }
    </>
  )
}