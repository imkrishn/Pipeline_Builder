import { Database } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

export const MemoryNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="memory"
      title="Memory"
      icon={Database}
      rightHandles={["output"]}
    >
      <div className="text-[11px] text-gray-500 mb-2">Store data</div>
    </BaseNode>
  );
};
