import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

import aboutUsPhoto from 'assets/images/about-us-photo.png'
import iconVeganFood from 'assets/images/icon-vegan-food.svg'
import iconMailboxQuality from 'assets/images/icon-mailbox-quality.svg'
import BlockImage from 'components/util/BlockImage'

function AboutUs() {
	return (
		<div className='block block-about-us'>
			<main>
				<h3 className='block-about-us__subtitle subtitle subtitle--italic'>About Us</h3>
				<h2 className='block-about-us__title'>We Believe in Working Accredited Farmers</h2>
				<p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
				<div className="list-iht">
					<div className="list-iht__item">
						<img className='list-iht__image' src={iconVeganFood} alt="" />
						<div className="list-iht__text-block">
							<h6 className='list-iht__title'>Organic Foods Only</h6>
							<p className='list-iht__text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
						</div>
					</div>
					<div className="list-iht__item">
						<img className='list-iht__image' src={iconMailboxQuality} alt="" />
						<div className="list-iht__text-block">
							<h6 className='list-iht__title'>Quality Standards</h6>
							<p className='list-iht__text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
						</div>
					</div>
				</div>
				<button className='btn btn--dark'>Shop now <FontAwesomeIcon icon={faCircleArrowRight} /></button>
			</main >
			<aside>
				<BlockImage image={aboutUsPhoto} alt="" />
			</aside>
		</div >
	)
}

export default AboutUs