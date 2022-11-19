import "./TextArea.scss"

const TextArea = ({inputName, inputType, labelText, onChange}) => {
  return (
    <div className='input-box'>
        <div className="input-box__container">
            <label className="input-box__label" htmlFor={inputName}>{labelText}</label>
        </div>        
        <textarea maxLength="230" className="input-box__input" type={inputType} id={inputName} name={inputName} onChange={onChange} required />
    </div>
  )
}

export default TextArea