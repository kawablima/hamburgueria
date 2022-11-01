import './style.css'
import Product from '../Product';

const ProductList = ({ products, setProducts, currentSale, setCurrentSale }) => { 

    return(
        <div className='productListMain'>
            {products.map((products, index) => (
                <Product 
                    products={products}
                    setProducts={setProducts}
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                    key={index}
                />
            ))}
        </div>
    )
}

export default ProductList;