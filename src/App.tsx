import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav";
import "./styles/App.scss";

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
