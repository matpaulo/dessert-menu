import { useState } from "react";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import { CartItem } from "./type";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const getTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleAddToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.title === product.title
      );
      return existingProduct
        ? prevCart.map((item) =>
            item.title === product.title
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, product];
    });
  };
  const handleUpdateQuantity = (productTitle: string, change: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex(
        (item) => item.title === productTitle
      );
      if (itemIndex !== -1) {
        updatedCart[itemIndex].quantity += change;
        if (updatedCart[itemIndex].quantity <= 0) {
          updatedCart.splice(itemIndex, 1);
        }
      } else if (change > 0) {
        updatedCart.push({ title: productTitle, price: 0, quantity: change });
      }
      return updatedCart;
    });
  }
  const getQuantity = (productTitle: string) => {
    const item = cart.find((item) => item.title === productTitle);
    return item ? item.quantity : 0;
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{
        backgroundColor: "hsl(13, 31%, 94%)",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="container">
        <h2 className="mt-3">Desserts</h2>
        <div className="row">
          <div className="col">
            <Cards
              onAddToCart={handleAddToCart}
              getQuantity={getQuantity}
              onUpdateQuantity={handleUpdateQuantity}
            />
          </div>
          <div className="col">
            <Cart
              cart={cart}
              getTotalQuantity={getTotalQuantity}
              getTotalPrice={getTotalPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
