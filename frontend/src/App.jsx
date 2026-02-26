import { Toolbar } from "./components/Toolbar";
import { PipelineUI } from "./components/PipelineUI";
import { SubmitButton } from "./components/Submit";

function App() {
  return (
    <div className="bg-red-50">
      <Toolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
