import { useState } from "react";

export const DraggableNode = ({ type, label, icon: Icon }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    setIsDragging(true);

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium  transition-all duration-200  cursor-grab select-none 
        ${
          isDragging
            ? "bg-gray-800 text-white scale-95 shadow-lg"
            : " text-gray-700 hover:bg-gray-100 hover:font-semibold  hover:shadow-md"
        }
      `}
    >
      {Icon && <Icon size={14} />}
      {label}
    </div>
  );
};
