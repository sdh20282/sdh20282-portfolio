import { motion, MotionValue, useTransform } from "framer-motion"

export function Progress({ 
  windowHeight, 
  sectionHeight, 
  scrollYProgress 
}: { 
  windowHeight: number, 
  sectionHeight: number, 
  scrollYProgress: MotionValue<number> 
}) {
  const wrapperTransformY = useTransform(scrollYProgress, [0, 1], [-windowHeight, sectionHeight - windowHeight]);

  const progressWidth = useTransform(scrollYProgress, [0, 0.1, 0.75, 1], ["0%", "0%", "100%", "100%"]);
  const progressOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.75, 0.8, 1], [0, 0, 0.8, 0.8, 0, 0]);

  return (
    <motion.div
      className="
        absolute hidden lg:block w-[90vw] z-[20]
        lg:left-[5vw] lg:top-[95vh]
      " 
      style={{
        y: wrapperTransformY,
        opacity: progressOpacity
      }}
    >
      <motion.div
        className="h-[2px] bg-[#04ffd5]"
        style={{
          width: progressWidth
        }}
      />
    </motion.div>
  )
}