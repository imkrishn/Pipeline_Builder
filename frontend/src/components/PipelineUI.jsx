import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "../context/store";
import { InputNode } from "../nodes/InputNode";
import { OutputNode } from "../nodes/OutputNode";
import { TextNode } from "../nodes/TextNode";
import { LLMNode } from "../nodes/LLMNode";
import { APINode } from "../nodes/APINode";
import { DataTransformNode } from "../nodes/DataTransformerNode";
import { ConditionNode } from "../nodes/ConditionNode";
import { DebugerNode } from "../nodes/DebugNode";
import { MemoryNode } from "../nodes/MemoryNode";
import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  dataTransformer: DataTransformNode,
  condition: ConditionNode,
  debug: DebugerNode,
  memory: MemoryNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  api: APINode,
};

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const getNodeID = useStore((state) => state.getNodeID);
  const addNode = useStore((state) => state.addNode);
  const onNodesChange = useStore((state) => state.onNodesChange);
  const onEdgesChange = useStore((state) => state.onEdgesChange);
  const onConnect = useStore((state) => state.onConnect);

  const getInitNodeData = (nodeID, type) => ({
    id: nodeID,
    nodeType: type,
  });

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      const appData = event.dataTransfer.getData("application/reactflow");

      if (!appData) return;

      const { nodeType } = JSON.parse(appData);

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(nodeType);

      addNode({
        id: nodeID,
        type: nodeType,
        position,
        data: getInitNodeData(nodeID, nodeType),
      });
    },
    [reactFlowInstance],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  //nodes color for minimap

  const nodeColor = useCallback((node) => {
    switch (node.type) {
      case "customInput":
        return "#10B981";
      case "dataTransformer":
        return "#6366F1";
      case "condition":
        return "#F59E0B";
      case "debug":
        return "#EF4444";
      case "memory":
        return "#14B8A6";
      case "llm":
        return "#8B5CF6";
      case "customOutput":
        return "#3B82F6";
      case "text":
        return "#F97316";
      case "api":
        return "#06B6D4";
      default:
        return "#999";
    }
  }, []);

  return (
    <div ref={reactFlowWrapper} className="w-screen lg:h-[75vh] h-[70vh]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
      >
        <Background color="#aaa" gap={gridSize} />
        <Controls />
        <MiniMap
          nodeColor={nodeColor}
          className="bg-white border border-gray-300"
        />
      </ReactFlow>
    </div>
  );
};
