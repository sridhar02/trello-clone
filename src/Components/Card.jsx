import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";


export const Card = ({ item, index, parent }) => {
  const { title, id } = item;


  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { title, index, parent, id, item },
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
      <div className="" >
        {title}
      </div>

    </div >

  );
};
