import { Brain, Cpu } from "lucide-react";
import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      type="llm"
      title="LLM"
      icon={Brain}
      leftHandles={["system", "prompt"]}
      rightHandles={["response"]}
    >
      <Cpu size={40} className="m-auto text-purple-600" />
    </BaseNode>
  );
};
