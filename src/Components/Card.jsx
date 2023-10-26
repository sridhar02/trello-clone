import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const Card = ({ item, index, parent }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { title, id } = item;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { title, index, parent, id, item },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <>
      <div
        className=" bg-white relative rounded-sm p-2 border-b-4 w-full mb-2"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <div className="" onClick={() => setIsOpen(!isOpen)}>
          {title}
        </div>
      </div>
    </>
  );
};
