import { About } from "../components/About";
import { Head } from "../components/Head";
import "../styles/Home.scss";

export const Home = () => {
  return (
    <div className="home__container">
      <Head />
      <About />
    </div>
  );
};
