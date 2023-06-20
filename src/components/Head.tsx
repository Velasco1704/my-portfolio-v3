import { Typewriter } from "react-simple-typewriter";
import "../styles/Head.scss";

export const Head = () => {
  return (
    <div className="head__container">
      <div className="head__title">
        <h1 className="head__title__h1">
          Daniel <span className="head__title__h1__span">Velasco</span>
        </h1>
        <h2 className="head__title__h2">
          <Typewriter
            words={["FrontEnd Developer", "Software Engineer"]}
            loop={false}
            cursor={true}
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
      <button className="head__button" type="button">
        My CV
      </button>
    </div>
  );
};
