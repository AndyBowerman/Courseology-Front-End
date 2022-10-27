import "./Button.scss";

const Button = ({text, func}) => {
  return (
    <button className="button__dark" onClick={func}>{text}</button>
  )
}

export default Button