import { Toolbar } from "./components/Toolbar";
import { PipelineUI } from "./components/PipelineUI";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#f5f5f559]">
      <Navbar />
      <Toolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
