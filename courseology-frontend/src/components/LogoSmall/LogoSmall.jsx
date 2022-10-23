import logo from "../../assets/logo.svg";
import "./LogoSmall.scss";

const LogoSmall = () => {
  return (
    <div className="logo-small">
      <div className="logo-small__cover"></div>
        <img src={logo} alt="Coursology Logo" className="logo-small__img"/>
        <h1 className="logo-small__header">Coursology</h1>
    </div>
  )
}

export default LogoSmall