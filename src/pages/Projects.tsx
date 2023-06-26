import { useNavigate } from "react-router-dom";
import { ProjectsList } from "../components/ProjectsList";
import "../styles/Projects.scss";

export const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="Projects__container">
      <button
        className="Projects__button"
        onClick={() => navigate("/")}
        type="button"
      >
        BACK
      </button>
      <ProjectsList />
    </div>
  );
};
