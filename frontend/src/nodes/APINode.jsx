import { Globe } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

export const APINode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="api"
      title="API Call"
      icon={Globe}
      leftHandles={["input"]}
      rightHandles={["output"]}
    >
      <div className="text-[11px] text-gray-500 ">Fetch external data</div>
    </BaseNode>
  );
};
