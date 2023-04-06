import React from 'react'

import ProductCard from 'components/util/ProductCard'

function Offer(props) {
	const displayCount = 4;

	function onCardClick() {
		alert('You can find this in products section :)\n P. S. I\'m to lazy to do this :)');
	}

	return (
		<div className='block block-offer'>
			<div className="block-offer__header">
				<h3 className='block-offer__subtitle subtitle subtitle--italic'>Offer</h3>
				<h1 className='block-offer__title'>We Offer Organic For you</h1>
			</div>
			<div className="block-offer__container">
				{props.products.slice(0, displayCount).map((product, idx) => <ProductCard handleClick={onCardClick} key={idx} product={product} />)}
			</div>
		</div>
	)
}

export default Offer