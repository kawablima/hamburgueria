import CartProduct from '../CartProduct';
import CartTotal from '../CartTotal';
import './style.css'

const Cart = ({ currentSale, setCurrentSale, valorTotal }) => {
    function exclude(id){
        const filtro = currentSale.filter(produto => produto.id !== id)
        setCurrentSale(filtro)
    }

    function excludeTudo(id){
        const filtro = currentSale.filter(produto => produto.id === id)
        setCurrentSale(filtro)
    }

    return(
        <div className='cartMain'>
            <h1 className='titleCart'>Carrinho de compras</h1>

            <ul className='cartProductUl'>
                {currentSale.map((currentSale,index) => (
                    <CartProduct
                        currentSale={currentSale}
                        setCurrentSale={setCurrentSale}
                        exclude={exclude}
                        key={index}
                    />    
                    
                ))}
            </ul> 

            <div>
                <CartTotal
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                    valorTotal={valorTotal}
                    excludeTudo={excludeTudo}
                />
            </div>
        </div>
    )
}

export default Cart;