import { Handle, Position } from "reactflow";
import { Wand2 } from "lucide-react";

export const DataTransformNode = ({ id }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-56 p-3 relative hover:shadow-md transition">
      <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold mb-2">
        <Wand2 size={14} />
        Transform
      </div>

      <div className="text-[11px] text-gray-500 mb-2">
        Modify or clean input data
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        className="!w-2.5 !h-2.5 !bg-indigo-500 !border-2 !border-white"
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="!w-2.5 !h-2.5 !bg-indigo-600 !border-2 !border-white"
      />
    </div>
  );
};
