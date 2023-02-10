import "./Home.scss";
import Header from "../../components/Header/Header";
import NavLinks from "../../components/NavLinks/NavLinks";
import LogoLarge from "../../components/LogoLarge/LogoLarge";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__dec"></div>
      <header className="home__header">
        <Header heading="Coursology" />
      </header>
      <main className="home__flex">
        <section className="home__cover--left">
            <NavLinks />
        </section>
        <section className="home__cover--right">
          <LogoLarge />
        </section>
      </main>
      <footer className="home__footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
