import "./Header.scss";

const Header = ({heading, name}) => {
  return (
    <div className="header">
        <h2 className={name}>{heading}</h2>
    </div>
  )
}

export default Header