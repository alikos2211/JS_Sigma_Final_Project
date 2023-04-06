import React from 'react'

import testimonialPhoto from 'assets/images/testimonial-sara.png'

import RatingBar from 'components/util/RatingBar'
import SimpleCircle from 'components/util/SimpleSircle'

function Testimonial(props) {
	return (
		<div className='block block-testimonial'>
			<div className="block-testimonial__header">
				<h3 className='block-testimonial__subtitle subtitle subtitle--italic'>Testimonial</h3>
				<h1 className='block-testimonial__title'>What Our Customer Saying?</h1>
			</div>
			<div className="block-testimonial__main">
				<img className='block-testimonial__image' src={testimonialPhoto} alt="" />
				<RatingBar rating={5} />
				<p className='block-testimonial__text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
				<h6 className='block-testimonial__name'>Sara Taylor</h6>
				<p className="block-testimonial__subname">Consumer</p>
			</div>
			{/* TODO: add three dots :) */}
			<hr className='block-testimonial__divider' />
			<div className="block-testimonial__circles">
				<SimpleCircle title='100%' subtitle='Organic' />
				<SimpleCircle title='285' subtitle='Active Product' />
				<SimpleCircle title='350+' subtitle='Organic Orchads' />
				<SimpleCircle title='25+' subtitle='Years of Farming' />
			</div>
		</div>
	)
}

export default Testimonial