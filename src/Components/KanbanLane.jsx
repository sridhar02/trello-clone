import { useState } from "react";
import { nanoid } from "nanoid";
import { useDroppable } from "@dnd-kit/core";

import { Card } from "./Card";

export const KanbanLane = (props) => {
  const { column, columns, setColumns } = props;
  const { title, items, id } = column;

  const [addRow, setAddRow] = useState("");
  const [showRowItem, setShowRowItem] = useState(false);

  const { setNodeRef } = useDroppable({
    id: title,
  });

  const handleRow = () => {
    const updatedColumns = columns.map((col) => {
      if (col.id === id) {
        return {
          id,
          title,
          items: [
            ...items,
            {
              title: addRow,
              id: nanoid(),
              description: "",
              coverImg: "",
              createdAt: new Date(),
            },
          ],
        };
      } else return col;
    });

    setColumns([...updatedColumns]);
    setShowRowItem(false);
    setAddRow("");
  };

  return (
    <div className="flex p-5 pl-0 flex-col min-h-10">
      <div className="flex justify-between">
        <div className="font-bold">{title}</div>
      </div>
      <div
        ref={setNodeRef}
        className="bg-gray-400 p-2 flex flex-col rounded-md "
      >
        {items.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            items={items}
            parent={title}
          />
        ))}
        <div className="bg-gray-200 border-b-2 w-[250px]">
          {!showRowItem ? (
            <button
              className="board-b-2 p-2 px-6 rounded-md flex items"
              onClick={() => setShowRowItem(true)}
            >
              Add another list +
            </button>
          ) : (
            <div className="m-2">
              <input
                type="text"
                placeholder="add name"
                className="w-full p-2"
                value={addRow}
                onChange={(e) => setAddRow(e.target.value)}
              />
              <button className="bg-blue-500 p-2 px-4 mt-2" onClick={handleRow}>
                Add
              </button>
              <button onClick={() => setShowRowItem(false)}>x</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
