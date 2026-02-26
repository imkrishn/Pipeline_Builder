import { Handle, Position } from "reactflow";
import { GitBranch } from "lucide-react";

export const ConditionNode = ({ id }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-56 p-3 relative hover:shadow-md transition">
      <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold mb-2">
        <GitBranch size={14} />
        Condition
      </div>

      <div className="text-[11px] text-gray-500 mb-2">
        Route flow based on logic
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        className="!w-2.5 !h-2.5 !bg-rose-500 !border-2 !border-white"
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-true`}
        style={{ top: "40%" }}
        className="!w-2.5 !h-2.5 !bg-rose-600 !border-2 !border-white"
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-false`}
        style={{ top: "70%" }}
        className="!w-2.5 !h-2.5 !bg-rose-400 !border-2 !border-white"
      />
    </div>
  );
};
