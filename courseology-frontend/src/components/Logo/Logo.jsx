import logo from "../../assets/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
        <img src={logo} alt="Coursology Logo" className="logo__img"/>
        <h1 className="logo__header">Coursology</h1>
    </div>
  )
}

export default Logo