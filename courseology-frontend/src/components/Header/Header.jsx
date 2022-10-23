import "./Header.scss";

const Header = ({heading}) => {
  return (
    <div className="header">
        <h2 className="header__text">{heading}</h2>
    </div>
  )
}

export default Header