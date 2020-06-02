import React from 'react';

const Items = ({ product }) => (
            <div className="products">
                
                    <div className="products-card">
                        <article className={product.price, product.type}>
                        <img className="product-image " src={product.img} alt={product.alt}/>
                        <h3>{product.productName}</h3>
                        <p>{product.productCost}</p>
                        <p>{product.productDescription}</p>
                        <button className="btn1">Add To Cart</button>
                        </article>
                    </div>
                
            </div>
        
);


export default Items;