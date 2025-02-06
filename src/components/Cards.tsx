import Card from "./Card";
import { dessertData } from "../dessertData";
import { CardsProps } from "../props";

const Cards = ({ onAddToCart, getQuantity, onUpdateQuantity }: CardsProps) => (
  <div className="col">
    <div className="row" style={{ width: "40rem", minWidth: "20px" }}>
      {dessertData.map(({ title, description, price, src }) => (
        <div className="col" key={title}>
          <Card
            title={title}
            description={description}
            price={price}
            src={src}
            alt={`image-${title.toLowerCase()}`}
            onAddToCart={onAddToCart}
            getQuantity={getQuantity}
            onUpdateQuantity={onUpdateQuantity}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Cards;
