import IncrementItem from "../images/icon-add-to-cart.svg";
import IncrementQuantity from "../images/icon-increment-quantity.svg";
import DecrementQuantity from "../images/icon-decrement-quantity.svg";
import { CardProps } from "../props";

function Card({
  title,
  description,
  price,
  src,
  alt,
  onAddToCart,
  onUpdateQuantity,
  getQuantity,
}: CardProps) {
  const quantity = getQuantity(title);
  const handleIncrement = () => onUpdateQuantity(title, 0.5);
  const handleDecrement = () => onUpdateQuantity(title, -0.5);

  return (
    <div className="card-body" style={{ width: "170px" }}>
      <img
        src={src}
        alt={alt}
        className="card mb-2"
        style={{
          height: "170px",
          width: "170px",
          borderRadius: "20px",
          borderColor:
            quantity === 0 ? "hsl(13, 31%, 94%)" : "hsl(14, 86%, 42%)",
          borderStyle: "solid",
          borderWidth: "2px",
        }}
      />
      <div className="d-flex flex-column align-items-center">
        {quantity === 0 ? (
          <button
            type="button"
            className="btn"
            style={{
              width: "120px",
              height: "30px",
              fontSize: "12px",
              borderRadius: "20px",
              backgroundColor: "hsl(20, 50%, 98%)",
              color: "black",
              borderColor: "hsl(12, 20%, 44%)",
              position: "relative",
              bottom: "25px",
            }}
            onClick={() => onAddToCart({ title, price, quantity: 1 })}
          >
            <img src={IncrementItem} alt="Add to cart" />
            <strong style={{ color: "hsl(14, 65%, 9%)" }}>Add to cart</strong>
          </button>
        ) : (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              width: "120px",
              height: "30px",
              borderRadius: "20px",
              backgroundColor: "hsl(14, 86%, 42%)",
              position: "relative",
              bottom: "25px",
            }}
          >
            <button
              className="btn"
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              onClick={handleDecrement}
              disabled={quantity === 0}
            >
              <img
                src={DecrementQuantity}
                alt="Decrement Quantity"
                style={{
                  height: "15px",
                  width: "15px",
                  position: "relative",
                  bottom: "10px",
                }}
              />
            </button>
            <h6 style={{ margin: "0 10px", color: "white" }}>{quantity}</h6>
            <button
              className="btn"
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              onClick={handleIncrement}
            >
              <img
                src={IncrementQuantity}
                alt="Increment Quantity"
                style={{
                  height: "15px",
                  width: "15px",
                  position: "relative",
                  bottom: "10px",
                  right: "10px",
                }}
              />
            </button>
          </div>
        )}
      </div>
      <div style={{ position: "relative", bottom: "16px" }}>
        <p className="card-title" style={{ fontSize: "12px" }}>
          {title}
        </p>
        <p style={{ fontSize: "14px" }} className="card-text">
          {description}
        </p>
        <p
          className="card-text"
          style={{ position: "relative", bottom: "12px" }}
        >
          ${price}
        </p>
      </div>
    </div>
  );
}

export default Card;
