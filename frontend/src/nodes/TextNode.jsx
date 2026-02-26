import { useState, useEffect, useMemo, useRef } from "react";
import { Handle, Position } from "reactflow";
import { Type } from "lucide-react";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  //console.log(text);

  // get variables inside {{ }}
  const variables = useMemo(() => {
    const matches = text.match(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g);
    if (!matches) return [];

    return [
      ...new Set(matches.map((match) => match.replace(/{{\s*|\s*}}/g, ""))),
    ];
  }, [text]);

  // console.log(variables);

  // auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm min-w-[180px] p-3 relative hover:shadow-md transition">
      <div className="flex items-center gap-2 text-amber-600 text-xs font-semibold mb-2">
        <Type size={14} />
        Text
      </div>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full text-xs px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none overflow-hidden"
        placeholder="Enter text..."
      />

      {/* left connection */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          className="!w-2.5 !h-2.5 !bg-amber-500 !border-2 !border-white"
          style={{
            top: `${30 + index * 20}px`,
          }}
        />
      ))}

      {/* output connecton */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="!w-2.5 !h-2.5 !bg-amber-600 !border-2 !border-white"
      />
    </div>
  );
};
