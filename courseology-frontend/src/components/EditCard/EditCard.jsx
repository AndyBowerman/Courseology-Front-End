import "./EditCard.scss";

const EditCard = ({img, title, info, duration, price}) => {
    
      const cleanDuration = (duration) => {
        if (duration >= 52) {
          return `${duration / 52} years`
        } else {
          return `${duration} weeks`
        }
      }

  return (
    <div className="edit-card">
        <h4>{img}</h4>
        <div className="edit-card__container">
            <h2 className="edit-card__header">{title}</h2>
            <p className="edit-card__info">{info}</p>
            <ul className="edit-card__list">
                <li className="edit-card__list-item">Course length: {cleanDuration(duration)}</li>
                <li className="edit-card__list-item">Price: £{price}</li>
            </ul>
        </div>
    </div>
  )
}

export default EditCard