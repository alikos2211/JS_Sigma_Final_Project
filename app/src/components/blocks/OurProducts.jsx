import React, { useState, useEffect } from 'react'

import ProductCard from 'components/util/ProductCard'
import ProductDetails from 'components/util/ProductDetails';

function OurProducts(props) {
	const [products, setProducts] = useState([]);
	const [selectedProduct, setSelected] = useState({});
	const [isModalVisible, setModalVisible] = useState(false);
	const [isUnfolded, setUnfolded] = useState(false);

	const displayCount = 8;

	function sortProducts(products) {
		products.sort((lhs, rhs) => {
			return (lhs.discounted === rhs.discounted)
				? 0
				: (lhs.discounted ? -1 : 1);
		});
	}

	useEffect(() => {
		props.products.forEach(product => {
			product.discounted = (product.price !== product.discountedPrice);
		});

		sortProducts(props.products);
		setProducts(props.products.slice(0, displayCount));
	}, [props.products]);

	function toggleShow() {
		if (isUnfolded) {
			sortProducts(props.products);
			setProducts(props.products.slice(0, displayCount));
		} else {
			sortProducts(props.products);
			setProducts(props.products);
		}
		setUnfolded(!isUnfolded);
	}

	function onCardClick(product) {
		setSelected(product);
		setModalVisible(true);
	}

	function onModalExit() {
		setModalVisible(false);
	}

	function addToCart(product, count) {
		if (count === 0) {
			alert('You can\'t buy zero of smth!');
			return;
		}

		onModalExit();
		props.handleCart(product, count);
	}

	return (
		<div className='block block-products'>
			<div className="block-products__header">
				<h3 className='block-products__subtitle subtitle subtitle--italic'>Categories</h3>
				<h1 className='block-products__title'>Our Products</h1>
			</div>
			<div className="block-products__container">
				{products.map((product, idx) => <ProductCard handleClick={onCardClick} key={idx} product={product} />)}
			</div>
			<ProductDetails handleCart={addToCart} handleExit={onModalExit} isVisible={isModalVisible} product={selectedProduct} />
			<button onClick={toggleShow} className="block-products__load-more btn btn--dark">{isUnfolded ? 'Show less' : 'Load More'}</button>
		</div>
	)
}

export default OurProducts