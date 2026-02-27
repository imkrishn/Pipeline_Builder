import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  nodeIDs: {},
  past: [],
  future: [],

  //save current state
  saveHistory: () => {
    const { nodes, edges, past } = get();

    set({
      past: [
        ...past,
        {
          nodes: JSON.parse(JSON.stringify(nodes)),
          edges: JSON.parse(JSON.stringify(edges)),
        },
      ],
      future: [],
    });
  },

  getNodeID: (type) => {
    let newId;

    set((state) => {
      const newIDs = { ...state.nodeIDs };

      if (!newIDs[type]) newIDs[type] = 0;
      newIDs[type] += 1;

      newId = `${type}-${newIDs[type]}`;

      return { nodeIDs: newIDs };
    });

    return newId;
  },

  // add node
  addNode: (node) => {
    get().saveHistory();

    set((state) => ({
      nodes: [...state.nodes, node],
    }));
  },

  onNodesChange: (changes) => {
    const hasRemoval = changes.some((change) => change.type === "remove");

    if (hasRemoval) {
      get().saveHistory();
    }

    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    }));
  },

  onEdgesChange: (changes) => {
    const hasRemoval = changes.some((change) => change.type === "remove");

    if (hasRemoval) {
      get().saveHistory();
    }

    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    }));
  },

  onConnect: (connection) => {
    get().saveHistory();

    set((state) => ({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
            height: 20,
            width: 20,
          },
        },
        state.edges,
      ),
    }));
  },

  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                [fieldName]: fieldValue,
              },
            }
          : node,
      ),
    }));
  },

  // undo to previous state
  undo: () => {
    const { past, nodes, edges, future } = get();
    if (!past.length) return;

    const previous = past[past.length - 1];

    set({
      nodes: previous.nodes,
      edges: previous.edges,
      past: past.slice(0, past.length - 1),
      future: [
        ...future,
        {
          nodes: JSON.parse(JSON.stringify(nodes)),
          edges: JSON.parse(JSON.stringify(edges)),
        },
      ],
    });
  },

  //redo to next state
  redo: () => {
    const { future, past, nodes, edges } = get();
    if (!future.length) return;

    const next = future[future.length - 1];

    set({
      nodes: next.nodes,
      edges: next.edges,
      future: future.slice(0, future.length - 1),
      past: [
        ...past,
        {
          nodes: JSON.parse(JSON.stringify(nodes)),
          edges: JSON.parse(JSON.stringify(edges)),
        },
      ],
    });
  },

  // reset canvas ui
  clear: () => {
    const { nodes, edges, past } = get();

    set({
      past: [
        ...past,
        {
          nodes: JSON.parse(JSON.stringify(nodes)),
          edges: JSON.parse(JSON.stringify(edges)),
        },
      ],
      nodes: [],
      edges: [],
      future: [],
    });
  },
}));
