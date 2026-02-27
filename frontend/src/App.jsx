import { Toolbar } from "./components/Toolbar";
import { PipelineUI } from "./components/PipelineUI";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#eeeded59]">
      <Navbar />
      <Toolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
