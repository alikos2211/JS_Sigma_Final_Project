import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import explorePhoto from 'assets/images/bg-explore-photo-transparent.png'

import BlockImage from 'components/util/BlockImage'

function Explore() {
	return (
		<div className="block block-explore">
			<main>
				<h2 className='block-explore__subtitle subtitle subtitle--italic'>100% Natural Food</h2>
				<h1 className='block-explore__title'>Choose the best healthier way of life</h1>
				<button className='block-explore__btn btn btn--accent'>Explore Now <FontAwesomeIcon icon={faCircleArrowRight} /></button>
			</main>
			<aside>
				<BlockImage image={explorePhoto} className='explore__image'/>
			</aside>
		</div>
	)
}

export default Explore