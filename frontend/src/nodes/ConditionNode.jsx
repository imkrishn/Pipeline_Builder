import { GitBranch } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="condition"
      title="Condition"
      icon={GitBranch}
      leftHandles={["input"]}
      rightHandles={["true", "false"]}
    >
      <div className="text-[11px] text-gray-500 mb-2">Route flow</div>
    </BaseNode>
  );
};
