import { React, useState } from 'react'

import BlockImage from 'components/util/BlockImage';
import RatingBar from 'components/util/RatingBar';
import CartProduct from 'components/util/CartProduct';
import getProductImage, { getProductPrice, calcCartTotal } from 'components/util/ProductUtil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function CartDetails(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function exit() {
        props.handleExit();
    }

    function confirmOrder() {
        props.order(props.cart, name, email);
    }

    function removeFromCart(entry) {
        props.handleProductRemoval(entry);
    }

    function incrementProductCount(entry) {
        props.incrementProductCount(entry);
    }

    function decrementProductCount(entry) {
        props.decrementProductCount(entry);
    }


    return (
        <div onClick={exit} className={`cart-details ${props.isVisible ? 'cart-details--visible' : ''}`}>

            <div className="cart-details__modal" onClick={(e) => e.stopPropagation()}>
                <div className="cart-details__container">
                    {props.cart.map((entry, idx) => <CartProduct
                        incrementProductCount={incrementProductCount}
                        decrementProductCount={decrementProductCount}
                        handleRemoval={removeFromCart}
                        key={idx} entry={entry} />)}
                </div>
                <div className="cart-details__form">
                    <input placeholder='Email' type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder='Name' type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
                    <h3 className='cart-details__total'>Total: <i>{calcCartTotal(props.cart)}$</i></h3>
                    <button className='cart-details__confirm btn btn--accent' onClick={confirmOrder}>Confirm order</button>
                </div>
                <FontAwesomeIcon onClick={exit} className='cart-details__close' icon={faClose} />
            </div>
        </div>
    )
}

export default CartDetails