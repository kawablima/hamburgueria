import "./style.css";

const CartProduct = ({ currentSale, setCurrentSale, exclude }) => {
  return (
    <li className="cartProductLi">
      <figure className="boxImage">
        <img
          src={currentSale.img}
          alt="Imagem do Lanche"
          className="imageCart"
        />
      </figure>

      <div className="cartP">
        <h1 className="nameCart">{currentSale.name}</h1>
        <p className="categoryCart">{currentSale.category}</p>
        <span>{currentSale.count}</span>
      </div>

      <button className="buttonCart" onClick={() => exclude(currentSale.id)}>
        Remover
      </button>
    </li>
  );
};

export default CartProduct;
