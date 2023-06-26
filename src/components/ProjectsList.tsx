import tasksImg from "../assets/tasks-image.png";
import blogImg from "../assets/blog-image.png";
import doctorDashboardImg from "../assets/doctor-dashboard-Image.png";
import { BsGithub, BsEye } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiExpress,
  SiPrisma,
} from "react-icons/si";
import "../styles/ProjectsList.scss";

export const ProjectsList = () => {
  return (
    <div className="ProjectsList__container">
      <h1 className="ProjectsList__h1">My Projects</h1>
      <div className="ProjectsList__container__cards">
        <div className="ProjectsList__card">
          <img
            className="ProjectsList__card__img"
            src={tasksImg}
            alt="tasksImg"
          />
          <div className="ProjectList__info__container">
            <h3 className="ProjectsList__card__info__h3">Tasks App</h3>
            <p className="ProjectsList__card__info__p">
              This is a simple app in order to create tasks, edit them and
              remove them. The database I used was firebase.
            </p>
          </div>
          <div className="ProjectList__technologies">
            <h4 className="ProjectList__technologies__h4">Technologies Used</h4>
            <div className="ProjectList__container__technologies">
              <span className="ProjectList__container__technologies__span skill-react">
                <SiReact />
              </span>
              <span className="ProjectList__container__technologies__span skill-ts">
                <SiTypescript />
              </span>
              <span className="ProjectList__container__technologies__span skill-scss">
                <FaSass />
              </span>
              <span className="ProjectList__container__technologies__span skill-firebase">
                <SiFirebase />
              </span>
            </div>
          </div>
          <div className="ProjectList__links">
            <a
              className="ProjectList__link"
              href="https://tasks-app-dd.netlify.app"
              target="_blank"
            >
              <BsEye />
            </a>
            <a
              className="ProjectList__link"
              href="https://github.com/Velasco1704/tasks-app-firebase"
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="ProjectsList__card">
          <img
            className="ProjectsList__card__img"
            src={blogImg}
            alt="blogImg"
          />
          <div className="ProjectList__info__container">
            <h3 className="ProjectsList__card__info__h3">Blog App</h3>
            <p className="ProjectsList__card__info__p">
              This app is a blog with a full login and CRUD, each user is You
              have to register with email and password. You can create, update
              and delete your post, every post you make each user will be
              reflected in the main menu. the basis of data I use was firebase.
            </p>
          </div>
          <div className="ProjectList__technologies">
            <h4 className="ProjectList__technologies__h4">Technologies Used</h4>
            <div className="ProjectList__container__technologies">
              <span className="ProjectList__container__technologies__span skill-react">
                <SiReact />
              </span>
              <span className="ProjectList__container__technologies__span skill-redux">
                <SiRedux />
              </span>
              <span className="ProjectList__container__technologies__span skill-ts">
                <SiTypescript />
              </span>
              <span className="ProjectList__container__technologies__span skill-scss">
                <FaSass />
              </span>
              <span className="ProjectList__container__technologies__span">
                <SiFirebase />
              </span>
            </div>
          </div>
          <div className="ProjectList__links">
            <a
              className="ProjectList__link"
              href="https://mi-blog-dv.netlify.app"
              target="_blank"
            >
              <BsEye />
            </a>
            <a
              className="ProjectList__link"
              href="https://github.com/Velasco1704/-mi-blog-firebase-redux-ts-"
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="ProjectsList__card">
          <img
            className="ProjectsList__card__img"
            src={doctorDashboardImg}
            alt="DoctorDashboardImg"
          />
          <div className="ProjectList__info__container">
            <h3 className="ProjectsList__card__info__h3">
              Doctor Dashboard App
            </h3>
            <p className="ProjectsList__card__info__p">
              This app is a patient control panel, each Doctor has to create
              your profile with email and password and other information of the
              Doctor. You will be able to create your patient's profile and you
              can also update or delete, each patient you create will be seen in
              the menu major. The database that i used is based on NodeJs,
              Express and use MySql with an ORM(Prisma).
            </p>
          </div>
          <div className="ProjectList__technologies">
            <h4 className="ProjectList__technologies__h4">Technologies Used</h4>
            <div className="ProjectList__container__technologies">
              <div className="ProjectList__technology">
                <h4 className="ProjectList__technology__h4">Frontend</h4>
                <div className="ProjectList__container__technology">
                  <span className="ProjectList__container__technologies__span skill-react">
                    <SiReact />
                  </span>
                  <span className="ProjectList__container__technologies__span skill-redux">
                    <SiRedux />
                  </span>
                  <span className="ProjectList__container__technologies__span skill-ts">
                    <SiTypescript />
                  </span>
                  <span className="ProjectList__container__technologies__span skill-scss">
                    <FaSass />
                  </span>
                </div>
              </div>
              <div className="ProjectList__technology">
                <h4 className="ProjectList__technology__h4">Backend</h4>
                <div className="ProjectList__container__technology">
                  <span className="ProjectList__container__technologies__span skill-nodejs">
                    <FaNodeJs />
                  </span>
                  <span className="ProjectList__container__technologies__span skill-express">
                    <SiExpress />
                  </span>
                  <span className="ProjectList__container__technologies__span skill-prisma">
                    <SiPrisma />
                  </span>
                  <span className="ProjectList__container__technologies__span skill-mySql">
                    <GrMysql />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ProjectList__links">
            <a
              className="ProjectList__link"
              href="https://doctor-dashboard-app.netlify.app"
              target="_blank"
            >
              <BsEye />
            </a>
            <div className="ProjectList__container__links">
              <a
                className="ProjectList__link-frontend"
                href="https://github.com/Velasco1704/app-doctor-client"
                target="_blank"
              >
                F.Code{" "}
                <span className="ProjectList__link__span-frontend">
                  <BsGithub />
                </span>
              </a>
              <a
                className="ProjectList__link-backend"
                href="https://github.com/Velasco1704/app-doctor-server"
                target="_blank"
              >
                B.Code{" "}
                <span className="ProjectList__link__span-backend">
                  <BsGithub />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
