import "./Home.scss";
import backgroundImage from "../../assets/learning-background.jpg";
import Logo from "../../components/Logo/Logo";

const Home = () => {
  return (
    <div className="home">
        <Logo />
        <div className="home__cover--left"></div>
        <div className="home__cover--right"></div>
        

    </div>
  )
}

export default Home