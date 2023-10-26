import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Dialog } from "./Dialog";

export const Card = ({ item, index, parent }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { title, id } = item;
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

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
        <Dialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          title="Create a Project"
        >
          <h1>Task preview</h1>
        </Dialog>
      </div>
    </>
  );
};
