import Link from "next/link";


export function ListText({
  text,
}: {
  text: string,
}) {
  return (
    <div className="flex text-sm font-nanumsquare">
      <div className="relative w-[4px] h-[4px] flex-shrink-0 rounded-full bg-[#aaa] mr-3 mt-[7px]" />
      {
        text.startsWith('LINK') ? (
          <Link href={text.split('::')[2]} target="_blank" className="underline">{text.split('::')[1]}</Link>
        ) : (
          <span>{text}</span>
        )
      }
    </div>
  )
}