import { Handle, Position } from "reactflow";

const nodeColor = {
  customInput: "text-green-600",
  customOutput: "text-blue-600",
  llm: "text-purple-600",
  text: "text-amber-600",
  api: "text-cyan-600",
  dataTransformer: "text-indigo-600",
  condition: "text-rose-600",
  debug: "text-orange-600 ",
  memory: "text-emerald-600",
};

export const BaseNode = ({
  id,
  type,
  title,
  icon: Icon,
  children,
  leftHandles = [],
  rightHandles = [],
}) => {
  const theme = nodeColor[type];

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl shadow-sm w-max max-w-56 p-3 relative hover:shadow-md transition ${theme}`}
    >
      <div className="flex items-center gap-1  text-xs font-semibold">
        <Icon size={14} />
        {title}
      </div>

      <div className="p-3 text-xs text-gray-600">{children}</div>

      {/* left connection */}
      {leftHandles.map((handle, index) => (
        <Handle
          key={`left-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${handle}`}
          className="!bg-gray-600 !w-2 !h-2"
          style={{ top: `${30 + index * 20}%` }}
        />
      ))}

      {/* right connetion */}
      {rightHandles.map((handle, index) => (
        <Handle
          key={`right-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${handle}`}
          className="!bg-gray-600 !w-2 !h-2"
          style={{ top: `${30 + index * 20}%` }}
        />
      ))}
    </div>
  );
};
