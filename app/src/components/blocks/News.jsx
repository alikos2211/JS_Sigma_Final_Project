import React from 'react'

import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NewsCard from 'components/util/NewsCard'

function News(props) {
	return (
		<div className='block block-news'>
			<div className="block-news__header">
				<div className="block-news__text">
					<h3 className='block-news__subtitle subtitle subtitle--italic'>News</h3>
					<h1 className='block-news__title'>Discover weekly content about organic food, & more</h1>
				</div>
				<div className="block-news__button">
					<button className='block-news__more btn btn--neutral'>More News <FontAwesomeIcon icon={faArrowCircleRight}/></button>
				</div>
			</div>
			<div className="block-news__container">
				{props.news.map((article, idx) => <NewsCard key={idx} className='news-item' item={article}/>)}
			</div>
			<div className="block-news__subscribe">
				<h1>Subscribe to our Newsletter</h1>
				{/* TODO: do form the right way */}
				<form action="">
					<input className='block-news__input-email' type="email" name="" id="" placeholder='Your Email Address'/>
					<input className='block-news__input-subscribe btn btn--dark' type="button" value="Subscribe" />
				</form>
			</div>
		</div>
	)
}

export default News