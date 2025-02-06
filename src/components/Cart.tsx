import CartWithItem from "./CartWithItem";
import EmpytCart from "./EmpytCart";
import { CartType } from "../type";

const Cart = ({ cart, getTotalQuantity, getTotalPrice }: CartType) => {
  return (
    <div>
      <div
        className="mt-4 p-3"
        style={{
          backgroundColor: "hsl(20, 50%, 98%)",
          minHeight: "22rem",
          borderRadius: "20px",
          width: "36rem",
        }}
      >
        <h2 style={{ color: "hsl(14, 86%, 42%)" }}>
          <strong>Your Cart({getTotalQuantity()})</strong>
        </h2>
        {getTotalQuantity() >= 1 ? (
          <CartWithItem cart={cart} getTotalPrice={getTotalPrice} />
        ) : (
          <EmpytCart />
        )}
      </div>
    </div>
  );
}

export default Cart;
