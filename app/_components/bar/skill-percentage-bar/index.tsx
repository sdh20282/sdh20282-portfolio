import { MotionValue, motion } from "framer-motion";

export function SkillPercentageBar({ 
  name, 
  color, 
  percentage, 
  widthValue, 
  opacityValue 
}: { 
  name: string, 
  color: string, 
  percentage: string, 
  widthValue: MotionValue<string>,
  opacityValue: MotionValue<number>
}) {
  return (
    <motion.div className='w-full py-[2px] px-[15px]' style={{
      opacity: opacityValue
    }}>
      <div className='w-full my-[6px]'>
        <span className='block text-sm font-semibold text-white'>{name}</span>
        <div className='w-full mt-1 bg-neutral-700 rounded-sm'>
          <div style={{
            width: `${percentage}%`,
          }}>
            <motion.div
              className='h-[6px] block rounded-md'
              style={{
                width: widthValue,
                backgroundColor: `${color}`,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}