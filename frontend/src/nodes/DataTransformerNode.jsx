import { Wand2 } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

export const DataTransformNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="dataTransformer"
      title="Data Transformer"
      icon={Wand2}
      leftHandles={["input"]}
      rightHandles={["output"]}
    >
      <div className="text-[11px] text-gray-500 mb-2">Modify data</div>
    </BaseNode>
  );
};
