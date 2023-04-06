import React from 'react'

import newsImage from 'assets/images/news-image.png'
import BlockImage from 'components/util/BlockImage'

import juice from 'assets/images/categories/category-juice.png'
import food from 'assets/images/categories/category-food.png'
import cookies from 'assets/images/categories/category-cookies.png'


function WhoWeAre() {
	return (
		<div className='block block-who-we-are'>
			<div className="block-who-we-are__text">
				<aside className='block-who-we-are__image'>
					<img src={newsImage} alt="" />
				</aside>
				<main>
					<h3 className='block-who-we-are__subtitle subtitle subtitle--italic'>Eco Friendly</h3>
					<h1 className='block-who-we-are__title'>Econis is a Friendly Organic Store</h1>
					<h2>Start With Our Company First</h2>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
					<h2>Learn How To Grow Yourself</h2>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
					<h2>Farming Strategies of Today</h2>
					<p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
				</main>
			</div>
			<div className="block-who-we-are__categories">
				<div className="block-who-we-are__category">
					<BlockImage className="block-who-we-are__category__image" image={juice} />
					<h3 className="block-who-we-are__category__name">Organic Juice</h3>
				</div>
				<div className="block-who-we-are__category">
					<BlockImage className="block-who-we-are__category__image" image={food} />
					<h3 className="block-who-we-are__category__name">Organic Food</h3>
				</div>
				<div className="block-who-we-are__category">
					<BlockImage className="block-who-we-are__category__image" image={cookies} />
					<h3 className="block-who-we-are__category__name">Nuts Cookies</h3>
				</div>
			</div>
		</div>
	)
}

export default WhoWeAre