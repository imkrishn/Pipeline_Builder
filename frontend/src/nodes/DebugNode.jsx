import { Handle, Position } from "reactflow";
import { Terminal } from "lucide-react";

export const DebugerNode = ({ id }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-56 p-3 relative hover:shadow-md transition">
      <div className="flex items-center gap-2 text-orange-600 text-xs font-semibold mb-2">
        <Terminal size={14} />
        Debugger
      </div>

      <div className="text-[11px] text-gray-500 mb-2">
        Inspect and debug flow
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        className="!w-2.5 !h-2.5 !bg-orange-500 !border-2 !border-white"
      />
    </div>
  );
};
