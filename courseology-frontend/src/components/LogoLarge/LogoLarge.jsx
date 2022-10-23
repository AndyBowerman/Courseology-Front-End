import "./LogoLarge.scss";
import logoImage from "../../assets/logo.svg";

const LogoLarge = () => {
  return (
    <div className="logo-large">
        <div className="logo-large__cover"></div>
        <img src={logoImage} alt="Lecture hall" className="logo-large__logo" />
    </div>
  )
}

export default LogoLarge