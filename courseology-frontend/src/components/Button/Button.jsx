import "./Button.scss";

const Button = ({text, func, name}) => {
  return (
    <button className={`button__dark ${name}`} onClick={func}>{text}</button>
  )
}

export default Button