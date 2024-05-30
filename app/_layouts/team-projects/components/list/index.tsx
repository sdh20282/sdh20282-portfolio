import { thumbnailOptions } from "@/data";

const List = ({ props: {
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
  item,
  title,
  id,
}}: {
  props: {
    handlePointerEnter: (index: number) => void,
    handlePointerLeave: (index: number) => void,
    moveItems: (x: number, y: number) => void,
    item: { active: boolean, index: number },
    title: string,
    id: number,
  }
}) => {
  return (
    <div
      className='border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90'
      style={{
        cursor: 'pointer'
      }}
      onPointerEnter={({ clientX, clientY }) => {
        handlePointerEnter(id);
        moveItems(clientX, clientY);
      }}
      onPointerLeave={({ clientX, clientY }) => {
        handlePointerLeave(id);
        moveItems(clientX, clientY);
      }}
    >
      <div
        className='flex items-center max-lg:flex-wrap'
        style={{
          color: item.active && item.index === id ? '#777' : '#fff',
          transition: 'all 0.3s',
          justifyContent: 'space-between',
          padding: item.active && item.index === id ? '4vw 2vh' : '4vw 6vh',
        }}
      >
        <p
          style={{
            fontSize: 'calc(clamp(3.25em, 4vw, 8em) * 0.75)',
          }}
        >
          {title}
        </p>
        <p className='text-lg font-medium'>Development</p>
      </div>
    </div>
  )
}

export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
  item
}: {
  handlePointerEnter: (index: number) => void,
  handlePointerLeave: (index: number) => void,
  moveItems: (x: number, y: number) => void,
  item: { active: boolean, index: number }
}) {
  const items = thumbnailOptions.map(({ title }, index) => {
    const id = index;

    return (
      <List
        key={`thumbnail-list-${id}`}
        props={{
          handlePointerEnter,
          handlePointerLeave,
          moveItems,
          item,
          title,
          id,
        }} />
    );
  });

  return <ul className='group'>{items}</ul>;
}