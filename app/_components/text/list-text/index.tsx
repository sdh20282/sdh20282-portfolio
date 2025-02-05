export function ListText({
  text,
}: {
  text: string,
}) {
  return (
    <div className="flex text-sm font-nanumsquare">
      <div className="relative w-[4px] h-[4px] flex-shrink-0 rounded-full bg-[#aaa] mr-3 mt-[7px]" />
      <span>{text}</span>
    </div>
  )
}