import "./style.css";

const CartTotal = ({ currentSale, setCurrentSale, valorTotal, excludeTudo }) => {

  return (
    <div className="totalMain">
      <hr />
      <div className="divPriceTotal">
        <h1 className="titleTotal">Total</h1>
        <span className="priceTotal">{valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      </div>

      <button
        className="buttonRemove"
        onClick={() => excludeTudo(currentSale.id)}
      >
        Remover todos
      </button>
    </div>
  );
};

export default CartTotal;
