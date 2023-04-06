import React from 'react'
import PropTypes from 'prop-types'

import searchIcon from 'assets/images/icon-search.svg'
import cartIcon from 'assets/images/icon-cart.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    function openCart() {
        props.handleOpenCart();
    }

    return (
        <header className='header'>
            <div className='header__brand'>
                <img className='header__logo' src={props.logo} alt='' />
                <h3 className='header__title'>{props.title}</h3>
            </div>
            <input className='header__menu-toggle' id='menu-toggle' type='checkbox' />
            <label className='header__menu-button-container' htmlFor='menu-toggle'>
                <div className='header__menu-button'></div>
            </label>
            <div className='header__navbar'>
                <nav className='navbar'>
                    <ul className='navbar__list'>
                        <li className='navbar__menu-item'><a href='#home'>Home</a></li>
                        <li className='navbar__menu-item'><a href='#project'>About</a></li>
                        <li className='navbar__menu-item navbar__menu-item--dropdown'>
                            <button className='navbar__menu-item--dropdown__button'>Pages <FontAwesomeIcon icon={faChevronDown} /></button>
                            <div className='navbar__menu-item--dropdown__content'>
                                <div className='dropdown-list'>
                                    <a className='dropdown-list__item' href='#'>Item 1</a>
                                    <a className='dropdown-list__item' href='#'>Item 2</a>
                                    <a className='dropdown-list__item' href='#'>Item 3</a>
                                </div>
                            </div>
                        </li>
                        <li className='navbar__menu-item'><a href='#about'>Shop</a></li>
                        <li className='navbar__menu-item'><a href='#blog'>Projects</a></li>
                        <li className='navbar__menu-item'><a href='#shop'>News</a></li>
                    </ul>
                </nav>
            </div>
            <div className='header__search-bar'>
                <input className='search__input' type='search' id='site-search' name='q' />
                <button className='search__button' type='submit'><img src={searchIcon} alt='Search' /></button>
            </div>
            <div className='header__cart'>
                <button onClick={openCart} className='cart-btn'><img src={cartIcon} alt='' /> <p>Cart ({props.cartCount})</p></button>
            </div>
        </header >
    )
}

Header.defaultProps = {
    title: 'Organick',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header