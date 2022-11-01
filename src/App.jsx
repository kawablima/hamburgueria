import { useEffect, useState } from "react";
import "./css/App.css";
import ProductList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  
  const valorTotal = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.price
  }, 0)

  console.log(currentSale)

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  function itensFiltrados(infosInput) {
    const filtro = products.filter(
      (product) =>
        product.name.toLowerCase().includes(infosInput.toLowerCase()) ||
        product.category.toLowerCase().includes(infosInput.toLowerCase())
    );

    setFilteredProducts(filtro);
  }

  return (
    <>
      <header className="App-header">
        <h1 className="logo">Burguer Kenzie</h1>

        <div className="inputHeader">
          <input
            type="search"
            className="inputSearch"
            placeholder="Digitar Pesquisa"
            onChange={(event) => itensFiltrados(event.target.value)}
          />
          <button
            type="submit"
            className="buttonInput"
            onClick={() => itensFiltrados()}
          >
            Pesquisar
          </button>
        </div>
      </header>

      <div className="App">
        <main>
          {filteredProducts[0] === undefined ? (
            <ProductList
              products={products}
              setProducts={setProducts}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          ) : (
            <ProductList
              products={filteredProducts}
              setProducts={setProducts}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          )}
        </main>

        <aside>
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            valorTotal={valorTotal}
          />
        </aside>
      </div>
    </>
  );
}

export default App;
