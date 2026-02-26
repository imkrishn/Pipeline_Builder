import { useState } from "react";
import { Handle, Position } from "reactflow";
import { Download } from "lucide-react";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [type, setType] = useState(data?.outputType || "Text");

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-56 p-3 relative hover:shadow-md transition">
      {/* header */}
      <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold mb-2">
        <Download size={14} />
        Output
      </div>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full text-xs px-2 py-1.5 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full text-xs px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
      >
        <option value="Text">Text</option>
        <option value="Image">Image</option>
      </select>

      {/* inpt connection*/}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="!w-2.5 !h-2.5 !bg-blue-500 !border-2 !border-white"
      />
    </div>
  );
};
