import { useState } from "react";
import { Handle, Position } from "reactflow";
import {
  UploadCloud,
  FileText,
  Type,
  SquareArrowRightEnter,
} from "lucide-react";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm w-56 p-3 relative hover:shadow-md transition">
      {/* header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
          <FileText size={14} />
          Data Input
        </div>
        <SquareArrowRightEnter size={15} className="text-green-600 " />
      </div>

      <input
        type="text"
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
        className="w-full text-xs px-2 py-1.5 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
        placeholder="Name"
      />

      <select
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
        className="w-full text-xs px-2 py-1.5 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500 bg-white"
      >
        <option value="Text">Text</option>
        <option value="File">File</option>
      </select>

      {inputType === "Text" && (
        <div className="flex items-center gap-1 text-[11px] text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
          <Type size={12} />
          <input
            type="text"
            placeholder="Enter text input"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      )}

      {inputType === "File" && (
        <label className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-md p-2 text-center text-[11px] text-gray-500 cursor-pointer hover:border-green-400 transition">
          <UploadCloud size={16} className="text-green-500 mb-1" />
          Upload file
          <input type="file" className="hidden" onChange={handleFileChange} />
          {fileName && (
            <span className="mt-1 text-[10px] text-gray-400 truncate w-full">
              {fileName}
            </span>
          )}
        </label>
      )}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="!w-2.5 !h-2.5 !bg-green-500 !border-2 !border-white"
      />
    </div>
  );
};
