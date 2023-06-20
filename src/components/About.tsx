import { useNavigate } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiHtml5, TfiCss3 } from "react-icons/tfi";
import { FaArrowRight, FaSass, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import "../styles/About.scss";

export const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about__container">
      <div className="about__info">
        <h3 className="about___info__h3">
          <span className="about__info__h3__span">About</span> Me !
        </h3>
        <p className="about__info__p">
          I am <span className="about__info__span">Daniel Velasco</span> dolor
          sit amet consectetur adipisicing elit. Necessitatibus nostrum harum
          assumenda accusamus dolorum laboriosam excepturi a eveniet nobis
          adipisci dignissimos magnam nemo, illum exercitationem beatae
          similique eaque eius non! Doloribus harum eum{" "}
        </p>
      </div>
      <div className="about__skills">
        <h3 className="about__skills__h3">Skills</h3>
        <div className="about__skills__container">
          <div className="about__skill skill-html">
            <TfiHtml5 />
          </div>
          <div className="about__skill skill-css">
            <TfiCss3 />
          </div>
          <div className="about__skill skill-js">
            <SiJavascript />
          </div>
          <div className="about__skill skill-ts">
            <SiTypescript />
          </div>
          <div className="about__skill skill-nodejs">
            <FaNodeJs />
          </div>
          <div className="about__skill skill-react">
            <SiReact />
          </div>
          <div className="about__skill skill-redux">
            <SiRedux />
          </div>
          <div className="about__skill skill-git">
            <FaGitAlt />
          </div>
          <div className="about__skill skill-tailwindcss">
            <SiTailwindcss />
          </div>
          <div className="about__skill skill-scss">
            <FaSass />
          </div>
        </div>
      </div>
      <div className="about__buttons__container">
        <button className="about__contact__button about__button__linkedIn">
          <a className="about__contact__a" href="" target="_blank">
            <BsLinkedin />
          </a>
        </button>
        <button
          onClick={() => navigate("/projects")}
          className="about__button"
          type="button"
        >
          My Projects
        </button>
        <button className="about__contact__button about__button__gitHub">
          <a
            className="about__contact__a"
            href="https://github.com/Velasco1704"
            target="_blank"
          >
            <BsGithub />
          </a>
        </button>
      </div>
    </div>
  );
};
