import './style.css'

const Product = ({ products, setProducts, currentSale , setCurrentSale }) => {
    function handleClick(products){
        const productInCard = currentSale.find(productCard => productCard.id === products.id)
        if(productInCard){
            const newCurrentSale = currentSale.map(product => {
                if(product.id === productInCard.id){
                    product.count += 1
                }
                return product
            })
            setCurrentSale(newCurrentSale, currentSale)
            
        }else{
            products.count = 1
            setCurrentSale([...currentSale, products])
        }
       
    }

    

    return(
        <div className='productMain'>
            <img src={products.img} alt="Foto do lanche" className="imageProduct"/>
            <h1 className="name">{products.name}</h1>
            <span className="category">{products.category}</span>
            <p className="price">{products.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <button className="buttonAdd" onClick={() => handleClick(products)}>Adicionar</button>
        </div>
    )
}

export default Product;