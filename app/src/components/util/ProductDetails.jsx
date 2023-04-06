import { React, useState } from 'react'

import BlockImage from 'components/util/BlockImage';
import RatingBar from 'components/util/RatingBar';
import getProductImage from 'components/util/ProductUtil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { parse } from '@fortawesome/fontawesome-svg-core';

function ProductDetails(props) {
    const [cartCount, setCartCount] = useState(0);

    const product = props.product;
    if (product.price === undefined) {
        product.price = 0;
        product.discountedPrice = 0;
    }
    const image = getProductImage(product);

    function exit() {
        props.handleExit();
    }

    function addToCart() {
        const parsedCount = parseInt(cartCount);
        // TODO: figure out why Number.isNan is not working here
        // It says 'Number.isNan is not a function'!

        props.handleCart(product, parsedCount);
    }

    return (
        <div onClick={exit} className={`product-details ${props.isVisible ? 'product-details--visible' : ''}`}>

            <div className="product-details__modal" onClick={(e) => {
                e.stopPropagation();
            }}>
                <main>

                    <BlockImage className='product-details__image' image={image} />
                </main>
                <aside>
                    <div className="product-details__details">
                        <p><span>Name:</span> <span>{product.name}</span></p>
                        <p><span>Category:</span> <span>{product.category}</span></p>
                        <p><span>Price:</span> <span className={`price-text ${product.discounted ? 'price-text--discounted' : ''}`}><span>${product.price.toFixed(2)}</span> <span>${product.discountedPrice.toFixed(2)}</span></span></p>
                        <RatingBar className='product-details__rating' rating={product.rating} />
                        <p><span>Decsription:</span> <span>{product.decsription}</span></p>
                    </div>
                    <div className="product-details__select">
                        <input className='product-details__count' type="number" onChange={(e) => { setCartCount(e.target.value); }} value={cartCount} min={0} />
                        <button onClick={addToCart} className='btn btn--accent product-details__add'>Add to cart</button>
                    </div>
                </aside>
                <FontAwesomeIcon onClick={exit} className='product-details__close' icon={faClose} />
            </div>
        </div>
    )
}

export default ProductDetails