import { useDraggable } from "@dnd-kit/core";

export const Card = ({ item, index, parent }) => {
  const { title, id: itemId } = item;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    itemId,
    data: { title, index, parent, itemId, item },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className=" bg-white relative rounded-sm p-2 border-b-4 w-full mb-2"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="">{title}</div>
    </div>
  );
};
