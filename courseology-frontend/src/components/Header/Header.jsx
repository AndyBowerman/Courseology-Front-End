import "./Header.scss";

const Header = ({ heading, border}) => {
  return <h2 className="header" id={border ? "border" : ""}>{heading}</h2>;
};

export default Header;
