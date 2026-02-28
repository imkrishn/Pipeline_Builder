import { Terminal } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

export const DebugerNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="debug"
      title="Debug"
      icon={Terminal}
      leftHandles={["input"]}
      rightHandles={["output"]}
    >
      <div className="text-[11px] text-gray-500 mb-2">Debug flow</div>
    </BaseNode>
  );
};
