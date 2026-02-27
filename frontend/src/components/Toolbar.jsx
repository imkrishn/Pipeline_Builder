import { Redo, Undo } from "lucide-react";
import { DraggableNode } from "./DraggableNode";
import { SubmitButton } from "./Submit";
import { useStore } from "../context/store";

export const Toolbar = () => {
  const undo = useStore((state) => state.undo);
  const redo = useStore((state) => state.redo);
  const clear = useStore((state) => state.clear);
  return (
    <div className=" p-2 w-screen flex justify-center items-center">
      <div className="flex  flex-wrap items-center justify-center border p-2 rounded-md border-gray-200 shadow-sm">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="dataTransformer" label="Data Transform" />
        <DraggableNode type="debug" label="Debug" />
        <DraggableNode type="api" label="API Call" />
        <DraggableNode type="memory" label="Memory" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <div className="flex items-center gap-3 lg:ml-28 mt-2 lg:mt-0 px-3 py-2">
          <Undo
            onClick={undo}
            size={18}
            className="text-gray-600 hover:text-gray-700 cursor-pointer hover:scale-110"
          />

          <Redo
            onClick={redo}
            size={18}
            className="text-gray-600 hover:text-gray-700 cursor-pointer hover:scale-110"
          />

          <div className="w-px h-5 bg-gray-200 mx-1"></div>

          {/* reset button */}
          <button
            onClick={clear}
            className=" text-xs px-4 py-1.5 font-medium rounded-md border border-gray-300 text-red-600 hover:bg-gray-50"
          >
            Clear
          </button>

          {/* submit button */}
          <SubmitButton />
        </div>
      </div>
    </div>
  );
};
