import { useRef, useState } from "react";
import TuGymImage from "../assets/TuGym-image.png";
import storeImage from "../assets/store-client.png";
import storeDashboardImage from "../assets/store-dashboard.png";
import blogApp from "../assets/blog-app-image.png";
import { BsGithub } from "react-icons/bs";
import { FaLink, FaExchangeAlt } from "react-icons/fa";
import "../styles/ProjectsList.scss";

export const ProjectsList = () => {
  const linkClientRef = useRef<HTMLSpanElement>(null);
  const linkDashboardRef = useRef<HTMLSpanElement>(null);
  const repoClientRef = useRef<HTMLSpanElement>(null);
  const repoDashboardRef = useRef<HTMLSpanElement>(null);
  const repoBackendRef = useRef<HTMLSpanElement>(null);

  const [imageState, setImageState] = useState(false);

  return (
    <div className="ProjectsList__container">
      <h1 className="ProjectsList__h1">My Projects</h1>
      <div className="ProjectsList__container__cards">
        <div className="ProjectsList__card">
          <img
            className="ProjectsList__card__img"
            src={TuGymImage}
            alt="tasksImg"
          />
          <div className="ProjectList__info__container">
            <h3 className="ProjectsList__card__info__h3">TuGym</h3>
            <p className="ProjectsList__card__info__p">
              Discover a new level of well-being at TuGym! On our website, we
              present an exciting range of subscription plans designed to fit
              your lifestyle and fitness goals. From basic options for beginners
              to premium plans for fitness enthusiasts, there's something for
              everyone!
            </p>
          </div>
          <ul className="ProjectList__technologies">
            <li className="ProjectList__technologies__li">Next JS</li>
            <li className="ProjectList__technologies__li">Tailwind CSS</li>
          </ul>
          <div className="ProjectList__links">
            <a
              className="ProjectList__link"
              href="https://gym-idvre9c9l-velasco1704.vercel.app"
              target="_blank"
            >
              <FaLink />
            </a>
            <a
              className="ProjectList__link"
              href="https://github.com/Velasco1704/gym-app"
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="ProjectsList__card">
          <div className="ProjectsList__card__container__img__store">
            <img
              className="ProjectsList__card__img"
              src={imageState ? storeImage : storeDashboardImage}
              alt="tasksImg"
            />
            <button
              className="ProjectsList__card__change__img__button"
              onClick={() => setImageState(!imageState)}
            >
              <FaExchangeAlt />
            </button>
          </div>
          <div className="ProjectList__info__container">
            <h3 className="ProjectsList__card__info__h3">Store App</h3>
            <p className="ProjectsList__card__info__p">
              Store App is made up of the client part where the user can
              purchase a wide variety of products, then there is the board for
              the administrator who can manage the entire store such as
              products, categories and orders.
              <span className="ProjectsList__card__info__p__span">
                The payment method is paypal and is fully functional
              </span>
            </p>
          </div>
          <ul className="ProjectList__technologies">
            <li className="ProjectList__technologies__li">React TS</li>
            <li className="ProjectList__technologies__li">Sass</li>
            <li className="ProjectList__technologies__li">Redux</li>
            <li className="ProjectList__technologies__li">Node TS</li>
            <li className="ProjectList__technologies__li">Express</li>
            <li className="ProjectList__technologies__li">Prisma</li>
            <li className="ProjectList__technologies__li">MySql</li>
          </ul>
          <div className="ProjectList__links ProjectList__links__store">
            <a
              onMouseEnter={() =>
                linkClientRef.current?.classList.add(
                  "ProjectList__link__open__span"
                )
              }
              onMouseLeave={() =>
                linkClientRef.current?.classList.remove(
                  "ProjectList__link__open__span"
                )
              }
              className="ProjectList__link ProjectList__link__store"
              href="https://my-store-client.netlify.app"
              target="_blank"
            >
              <FaLink />
              <span
                ref={linkClientRef}
                className="ProjectList__link__span__store"
              >
                Link Client
              </span>
            </a>
            <a
              onMouseEnter={() =>
                linkDashboardRef.current?.classList.add(
                  "ProjectList__link__open__span"
                )
              }
              onMouseLeave={() =>
                linkDashboardRef.current?.classList.remove(
                  "ProjectList__link__open__span"
                )
              }
              className="ProjectList__link ProjectList__link__store"
              href="https://my-store-dashboard.netlify.app"
              target="_blank"
            >
              <FaLink />
              <span
                ref={linkDashboardRef}
                className="ProjectList__link__span__store"
              >
                Link Dashboard
              </span>
            </a>
            <a
              onMouseEnter={() =>
                repoClientRef.current?.classList.add(
                  "ProjectList__link__open__span"
                )
              }
              onMouseLeave={() =>
                repoClientRef.current?.classList.remove(
                  "ProjectList__link__open__span"
                )
              }
              className="ProjectList__link ProjectList__link__store"
              href="https://github.com/Velasco1704/store-client"
              target="_blank"
            >
              <BsGithub />
              <span
                ref={repoClientRef}
                className="ProjectList__link__span__store"
              >
                Repo Client
              </span>
            </a>
            <a
              onMouseEnter={() =>
                repoDashboardRef.current?.classList.add(
                  "ProjectList__link__open__span"
                )
              }
              onMouseLeave={() =>
                repoDashboardRef.current?.classList.remove(
                  "ProjectList__link__open__span"
                )
              }
              className="ProjectList__link ProjectList__link__store"
              href="https://github.com/Velasco1704/store-dashboard"
              target="_blank"
            >
              <BsGithub />
              <span
                ref={repoDashboardRef}
                className="ProjectList__link__span__store"
              >
                Repo Dashboard
              </span>
            </a>
            <a
              onMouseEnter={() =>
                repoBackendRef.current?.classList.add(
                  "ProjectList__link__open__span"
                )
              }
              onMouseLeave={() =>
                repoBackendRef.current?.classList.remove(
                  "ProjectList__link__open__span"
                )
              }
              className="ProjectList__link ProjectList__link__store"
              href="https://github.com/Velasco1704/store-server"
              target="_blank"
            >
              <BsGithub />
              <span
                ref={repoBackendRef}
                className="ProjectList__link__span__store"
              >
                Repo Backend
              </span>
            </a>
          </div>
        </div>
        <div className="ProjectsList__card">
          <img
            className="ProjectsList__card__img"
            src={blogApp}
            alt="tasksImg"
          />
          <div className="ProjectList__info__container">
            <h3 className="ProjectsList__card__info__h3">Blog App</h3>
            <p className="ProjectsList__card__info__p">
              : En Blog App el usuario tendrá que registrarse, después de eso
              prodra ver los demás post de los otros usuarios, también podrá
              crear sus propios post, editarlos y eliminarlos.
            </p>
          </div>
          <ul className="ProjectList__technologies">
            <li className="ProjectList__technologies__li">React TS</li>
            <li className="ProjectList__technologies__li">Redux</li>
            <li className="ProjectList__technologies__li">Sass</li>
            <li className="ProjectList__technologies__li">Node TS</li>
            <li className="ProjectList__technologies__li">Express</li>
            <li className="ProjectList__technologies__li">Prisma</li>
            <li className="ProjectList__technologies__li">MySql</li>
          </ul>
          <div className="ProjectList__links">
            <a
              className="ProjectList__link"
              href="https://blog-app-dv.netlify.app"
              target="_blank"
            >
              <FaLink />
            </a>
            <a
              className="ProjectList__link"
              href="https://github.com/Velasco1704/blog-app-client"
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
