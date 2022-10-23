import "./Home.scss";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import LogoLarge from "../../components/LogoLarge/LogoLarge";
import logoImage from "../../assets/logo.svg";

const Home = () => {
  return (
    <div className="home">
        <div className="home__header">
            <Header heading="coursology"/>
        </div>
        <div className="home__grid">
            <div className="home__cover--left">
                <div className="home__navbar">
                    <NavBar />
                </div>
            </div>
            <div className="home__cover--right">
                <LogoLarge />          
            </div>
        </div>
    </div>
  )
}

export default Home