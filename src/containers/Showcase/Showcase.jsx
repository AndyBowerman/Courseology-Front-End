import NavBar from "../../components/NavBar/NavBar";
import "./Showcase.scss";
import background from "../../assets/learning-background.jpg";

const Showcase = () => {
  return (
    <div className="showcase">
      <NavBar />
      <img className="showcase__background" src={background} alt="" />
      <div className="showcase__cover"></div>
    </div>
  )
}

export default Showcase