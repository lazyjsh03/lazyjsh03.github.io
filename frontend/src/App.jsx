import { Route, Routes } from "react-router-dom";
import "./App.css";
// pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-nomad-bg text-nomad-text min-h-screen pr-10 pl-10">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
