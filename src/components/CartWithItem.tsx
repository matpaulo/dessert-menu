import CarbonFree from "../images/icon-carbon-neutral.svg";
import Modal from "./Modal";
import { CartWithItemProps } from "../props";

const CartWithItem = ({ cart, getTotalPrice }: CartWithItemProps) => {
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          position: "relative",
          right: "30px",
          maxHeight: "35rem",
          overflow: "auto",
          scrollbarWidth: "none",
        }}
      >
        {cart.map((item) => (
          <li key={item.title}>
            <p>{item.title}</p>
            <p
              className="d-flex justify-content-start"
              style={{ position: "relative", bottom: "15px" }}
            >
              <div style={{ color: "hsl(14, 86%, 42%)" }}>{item.quantity}x</div>
              <div style={{ color: "hsl(14, 25%, 72%)", marginLeft: "15px" }}>
                @${item.price.toFixed(2)}
              </div>
              <div style={{ color: "hsl(7, 20%, 60%)", marginLeft: "10px" }}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </p>
            <hr style={{ position: "relative", bottom: "10px" }} />
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between">
        <h4>Order Total</h4>
        <h4>
          <strong>${getTotalPrice().toFixed(2)}</strong>
        </h4>
      </div>
      <div className="d-flex justify-content-center pt-3">
        <div
          className="card d-flex align-items-center flex-row"
          style={{
            width: "550px",
            padding: "10px",
            backgroundColor: "hsl(13, 31%, 94%)",
            border: "none",
            paddingLeft: "7rem",
          }}
        >
          <img
            src={CarbonFree}
            alt="Carbon free"
            style={{
              height: "30px",
              marginRight: "10px",
            }}
          />
          <h6 style={{ margin: 0 }}>
            This is a <strong>carbon-neutral</strong> delivery
          </h6>
        </div>
      </div>
      <div
        className="d-flex justify-content-center pt-4"
        style={{ height: "80px" }}
      >
        <Modal cart={cart} getTotalPrice={getTotalPrice} />
      </div>
    </>
  );
};

export default CartWithItem;
