import React from 'react'

import RatingBar from 'components/util/RatingBar'
import BlockImage from 'components/util/BlockImage'
import getProductImage from 'components/util/ProductUtil';

function ProductCard(props) {
    const product = props.product;
    const image = getProductImage(product);

    function cardClicked() {
        props.handleClick(product);
    }

    return (
        <div className="product-card" onClick={cardClicked}>
            <p className='product-card__category'>{product.category}</p>
            <BlockImage image={image} className="product-card__image" />
            <p className='product-card__name'>{product.name}</p>
            <hr className='product-card__divider' />
            <div className="product-card__info">
                <p className={`price-text product-card__price ${product.discounted ? 'product-card__price--discounted' : ''}`}>
                    <span>${product.price.toFixed(2)}</span> <span>${product.discountedPrice.toFixed(2)}</span>
                </p>
                <RatingBar rating={product.rating} />
            </div>
        </div>
    )
}

export default ProductCard