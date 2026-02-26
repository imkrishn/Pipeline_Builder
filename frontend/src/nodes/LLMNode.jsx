import { Handle, Position } from "reactflow";
import { Brain, Cpu } from "lucide-react";

export const LLMNode = ({ id }) => {
  return (
    <div className="bg-white border border-gray-200 text-purple-600 py-4 rounded-xl shadow-sm w-32 p-3 relative hover:shadow-md transition">
      {/* header */}
      <div className="flex items-center gap-2  text-xs font-semibold mb-2">
        <Brain size={14} />
        LLM
      </div>

      <Cpu size={40} className="m-auto " />

      {/* left connection*/}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        className="!w-2.5 !h-2.5 !bg-purple-500 !border-2 !border-white"
        style={{ top: "35%" }}
      />

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        className="!w-2.5 !h-2.5 !bg-purple-500 !border-2 !border-white"
        style={{ top: "65%" }}
      />

      {/* output */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="!w-2.5 !h-2.5 !bg-purple-600 !border-2 !border-white"
      />
    </div>
  );
};
