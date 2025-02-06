import { useState } from "react";
import ConfirmImage from "../images/icon-order-confirmed.svg";
import { ModalProps } from "../props";

const Modal = ({ cart, getTotalPrice }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <>
      <button
        onClick={handleOpen}
        style={{
          backgroundColor: "hsl(14, 86%, 42%)",
          color: "white",
          borderRadius: "20px",
          border: "transparent",
          height: "50px",
          width: "140px",
        }}
      >
        Confirm Order
      </button>
      {isOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              width: "500px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={ConfirmImage}
              alt="Confirm Order"
              style={{ height: "40px" }}
            />
            <h1 className="mt-">Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
            <ul
              style={{
                listStyle: "none",
                position: "relative",
                right: "30px",
                overflow: "auto",
                scrollbarWidth: "none",
                maxHeight: "30rem",
              }}
            >
              {cart.map((item) => (
                <li key={item.title}>
                  <p className="d-flex justify-content-start">{item.title}</p>
                  <p
                    className="d-flex justify-content-start"
                    style={{ position: "relative", bottom: "15px" }}
                  >
                    <div style={{ color: "hsl(14, 86%, 42%)" }}>
                      {item.quantity}x
                    </div>
                    <div
                      style={{ color: "hsl(14, 25%, 72%)", marginLeft: "15px" }}
                    >
                      @${item.price.toFixed(2)}
                    </div>
                    <div
                      style={{ color: "hsl(7, 20%, 60%)", marginLeft: "10px" }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </p>
                </li>
              ))}
              <hr />
            </ul>
            <div className="d-flex justify-content-between">
              <h4>Order Total</h4>
              <h4>
                <strong>${getTotalPrice().toFixed(2)}</strong>
              </h4>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-4">
              <button
                onClick={() => window.location.reload()}
                style={{
                  backgroundColor: "hsl(14, 86%, 42%)",
                  color: "white",
                  borderRadius: "20px",
                  border: "transparent",
                  height: "50px",
                  width: "140px",
                }}
              >
                Start new order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
