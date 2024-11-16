import { products } from "../data/Products";

function PromoList() {
    return(
        <div className="s-products">
            <div className="container">
                <h3>Principais Títulos</h3>
                <div className="promo-list">
                    {products.map((product) => (
                        <div key={product.id} className='item-div'>
                            <div className="img-div">
                                <img className="item-img" src={product.img} alt={product.name} />
                            </div>
                            
                            <div className='item-desc'>
                                <h4>{product.name}</h4>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default PromoList;