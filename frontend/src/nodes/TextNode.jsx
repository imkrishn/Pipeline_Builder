import { useState, useEffect, useMemo, useRef } from "react";
import { Type } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

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
    <BaseNode
      id={id}
      type="text"
      title="Text"
      icon={Type}
      leftHandles={variables}
      rightHandles={["output"]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full text-xs px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none overflow-hidden"
        placeholder="Enter text..."
      />
    </BaseNode>
  );
};
