import "./Home.scss";
import Header from "../../components/Header/Header";
import NavLinks from "../../components/NavLinks/NavLinks";
import LogoLarge from "../../components/LogoLarge/LogoLarge";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header home__header--large">
        <Header name="header__text header__text--large" heading="coursology" />
      </div>
      <div className="home__grid">
        <div className="home__cover--left">
          <div className="home__header home__header--small">
            <Header name="header__text header__text--small" heading="coursology" />
          </div>
          <div className="home__navbar">
            <NavLinks />
          </div>
        </div>
        <div className="home__cover--right">
          <LogoLarge />
        </div>
      </div>
      <div className="home__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
