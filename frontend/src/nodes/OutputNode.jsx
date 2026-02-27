import { useState } from "react";
import { Download } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [type, setType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      type="customOutput"
      title="Output"
      icon={Download}
      leftHandles={["input"]}
    >
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
    </BaseNode>
  );
};
