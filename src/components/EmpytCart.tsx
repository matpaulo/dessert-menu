import ImageCake from "../images/illustration-empty-cart.svg";

const EmpytCart = () => {
  return (
    <div
      className="d-flex row justify-content-center align-items-center"
      style={{ height: "20rem", width: "35rem" }}
    >
      <img src={ImageCake} alt="carrinho vazio" style={{ height: "10rem" }} />
      <p className="d-flex justify-content-center">Your added items will apear here</p>
    </div>
  );
};

export default EmpytCart;
