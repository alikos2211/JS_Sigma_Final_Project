import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BlockImage from 'components/util/BlockImage';
import getProductImage from 'components/util/ProductUtil';
import { getProductPrice, getProductDiscount } from 'components/util/ProductUtil';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function CartProduct(props) {
    const product = props.entry.product;
    const count = props.entry.count;

    function removeProduct() {
        props.handleRemoval(props.entry);
    }

    function incrementProductCount() {
        props.incrementProductCount(props.entry);
    }

    function decrementProductCount() {
        props.decrementProductCount(props.entry);
    }

    return (
        <div className='cart-product'>
            <div className="cart-product__count-manip">
            <FontAwesomeIcon onClick={incrementProductCount} className='cart-product__plus' icon={faPlus}/>
            <FontAwesomeIcon onClick={decrementProductCount} className='cart-product__minus' icon={faMinus}/>
            </div>
            <h4 className='cart-product__count'>x{count}</h4>
            <BlockImage className='cart-product__image' image={getProductImage(product)}/>
            <div className="cart-product__details">
                <h6 className='cart-product__name'>{product.name}</h6>
                <p className={`price-text cart-product__price ${product.discounted ? 'product-card__price--discounted' : ''}`}>
                    <span>${product.price.toFixed(2)}</span> <span>${product.discountedPrice.toFixed(2)}</span>
                    <i> per unit...</i>
                </p>
            </div>
            <h6 className='cart-product__final-price'> ={getProductPrice(product, count)}$</h6>
            <h6 className='cart-product__discount'> {getProductDiscount(product, count)}$ off!</h6>
            <FontAwesomeIcon onClick={removeProduct} className='cart-product__delete' icon={faTrash}/>
        </div>
    )
}

export default CartProduct