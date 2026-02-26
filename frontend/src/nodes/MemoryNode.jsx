import { Handle, Position } from "reactflow";
import { Database } from "lucide-react";

export const MemoryNode = ({ id }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-56 p-3 relative hover:shadow-md transition">
      <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold mb-2">
        <Database size={14} />
        Memory
      </div>

      <div className="text-[11px] text-gray-500 mb-2">
        Store intermediate data
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        className="!w-2.5 !h-2.5 !bg-emerald-500 !border-2 !border-white"
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="!w-2.5 !h-2.5 !bg-emerald-600 !border-2 !border-white"
      />
    </div>
  );
};
