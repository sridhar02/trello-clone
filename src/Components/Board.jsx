import { useState } from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import { KanbanColumn } from "./KanbanColumn";
import { nanoid } from "nanoid";

export const Board = () => {


  const [columns, setColumns] = useState([
    { id: "15dfbbb8-9468-4929-8e10-27d024109e14", title: "Todo", items: [] },
    { id: "61873849-a418-41e7-8518-ae15b5f7e2ba", title: "In Progress", items: [] }
  ]);

  const [showAddCol, setShowAddCol] = useState(false);
  const [columnName, setColumnName] = useState("");

  const addColumn = () => {
    setColumns([
      ...columns,
      {
        id: nanoid(),
        title: columnName,
        items: [],
      },
    ]);
    setShowAddCol(false);
    setColumnName("");
  };

  const handleDrag = (e) => {
    const container = e.over?.id;
    const id = e.active.data.current?.id ?? 0;
    const item = e.active.data.current?.item ?? 0;
    const parent = e.active.data.current?.parent ?? "ToDo";

    if (container) {
      const updatedColumns = columns.map((col) => {
        if (col.title === parent) {
          return {
            ...col,
            items: col.items.filter((item) => item.id !== id),
          };
        }

        if (col.title === container) {
          return {
            ...col,
            items: [...col.items, item],
          };
        }

        return col;
      });
      setColumns(updatedColumns);
    }
  };

  return (
    <DndContext collisionDetection={rectIntersection} onDragEnd={handleDrag}>
      <div className="flex flex-row items-start mt-2 justify-start">
        {columns.map((col) => (
          <KanbanColumn
            key={col.id}
            column={col}
            columns={columns}
            setColumns={setColumns}
          />
        ))}
        <div className="bg-gray-200 border-b-2 w-[250px] mt-10">
          {!showAddCol ? (
            <button
              className="board-b-2 p-2 px-6 rounded-md flex items"
              onClick={() => setShowAddCol(true)}
            >
              Add another list +
            </button>
          ) : (
            <div className="m-2">
              <input
                type="text"
                placeholder="add name"
                className="w-full p-2"
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
              />
              <button className="bg-blue-500 p-2 px-4 mt-2" onClick={addColumn}>
                Add
              </button>
              <button onClick={() => setShowAddCol(false)}>x</button>
            </div>
          )}
        </div>
      </div>
    </DndContext>
  );
};
