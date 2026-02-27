import { useState } from "react";
import { useStore } from "../context/store";

const API_URL = "http://127.0.0.1:8000/pipelines/parse";

//alert component for response

const AlertResponse = ({ node, edge, dag, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 lg:w-[400px] rounded-md bg-white shadow-2xl p-6 border border-gray-100 animate-[fadeIn_0.2s_ease-out]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-600">
            Pipeline Analysis
          </h2>

          <div
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              dag ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            {dag ? "Valid DAG" : "Cycle Detected"}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 text-center border">
            <p className="text-xs text-gray-500">Nodes</p>
            <p className="text-lg font-semibold text-gray-700">{node}</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-center border">
            <p className="text-xs text-gray-500">Edges</p>
            <p className="text-lg font-semibold text-gray-700">{edge}</p>
          </div>
        </div>

        {/* close Button */}
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 font-medium hover:opacity-90 active:scale-[0.98] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertData, setAlertData] = useState({
    nodes: 0,
    edges: 0,
    is_dag: false,
  });

  // submit handler function

  const handleSubmit = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes.map((n) => ({ id: n.id })),
          edges: edges.map((e) => ({
            source: e.source,
            target: e.target,
          })),
        }),
      });

      const data = await response.json();
      setAlertData({
        nodes: data.num_nodes,
        edges: data.num_edges,
        is_dag: data.is_dag,
      });
      setOpenAlert(true);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Error connecting to backend.");
    }
  };

  return (
    <>
      {openAlert && (
        <AlertResponse
          node={alertData.nodes}
          edge={alertData.edges}
          dag={alertData.is_dag}
          onClose={() => setOpenAlert(false)}
        />
      )}
      <button
        type="button"
        onClick={handleSubmit}
        className="rounded-md bg-blue-400 text-white px-3 py-1.5 font-semibold hover:bg-blue-500 transition active:opacity-90 text-sm"
      >
        Submit
      </button>
    </>
  );
};
