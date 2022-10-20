import Card from "../../components/Card/Card";
import "./CardContainer.scss";

const CardContainer = ({obj}) => {
    const renderCards = obj?.map((card, index) => {
        return (
            <Card 
                key={index}
                img={card.img}
                title={card.title}
                info={card.info}
                duration={card.duration}
                price={card.price}
            />
        )
        
    })
  return (
    <div className="card-container">{renderCards}</div>
  )
}

export default CardContainer