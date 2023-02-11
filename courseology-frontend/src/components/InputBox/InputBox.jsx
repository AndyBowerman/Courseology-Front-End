import './InputBox.scss';

const InputBox = ({labelText, inputType, inputName}) => {
  return (
    <div className='input-box'>
        <div className="input-box__container">
            <label className="input-box__label" htmlFor={inputName}>{labelText}</label>
        </div>        
        <input className="input-box__input" type={inputType} id={inputName} name={inputName} required />
    </div>
  )
}

export default InputBox