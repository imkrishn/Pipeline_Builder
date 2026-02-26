import { Handle, Position } from "reactflow";
import { Globe } from "lucide-react";

export const APINode = ({ id }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-56 p-3 relative hover:shadow-md transition">
      <div className="flex items-center gap-2 text-cyan-600 text-xs font-semibold mb-2">
        <Globe size={14} />
        API Request
      </div>

      <div className="text-[11px] text-gray-500 mb-2">Fetch external data</div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        className="!w-2.5 !h-2.5 !bg-cyan-500 !border-2 !border-white"
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="!w-2.5 !h-2.5 !bg-cyan-600 !border-2 !border-white"
      />
    </div>
  );
};
