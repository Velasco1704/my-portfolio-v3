import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
