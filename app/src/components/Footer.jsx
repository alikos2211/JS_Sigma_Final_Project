import React from 'react'

import PropTypes from 'prop-types'

import instagram from 'assets/images/icon-social-instagram.svg'
import facebook from 'assets/images/icon-social-facebook.svg'
import twitter from 'assets/images/icon-social-twitter.svg'
import pinterest from 'assets/images/icon-social-pinterest.svg'

function Footer(props) {
	return (
		<footer className='footer'>
			<main>
				<div className="footer__contacts">
					<h1>Contact Us</h1>
					<h2>Email</h2>
					<p>needhelp@Organia.com</p>
					<h2>Phone</h2>
					<p>666 838 888</p>
					<h2>Address</h2>
					<p>88 road, borklyn street, USA</p>
				</div>
				<div className="footer__socials">
					<div className='footer__brand'>
						<img className='footer__logo' src={props.logo} alt="" />
						<h3 className='footer__title'>{props.title}</h3>
					</div>
					<p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </p>
					<div className="socials-container">
						<div className="social">
							<img src={instagram} alt="" />
						</div>
						<div className="social">
							<img src={facebook} alt="" />
						</div>
						<div className="social">
							<img src={twitter} alt="" />
						</div>
						<div className="social">
							<img src={pinterest} alt="" />
						</div>
					</div>
				</div>
				<div className="footer__pages">
					<h1>Utility Pages</h1>
					<p>Style Guide</p>
					<p>404 Not Found</p>
					<p>Password Protected</p>
					<p>Licenses</p>
					<p>Changelog</p>
				</div>
			</main>
			<div className="footer__copyright">
				<p>Copyright © <strong>Organick</strong> | Designed by <strong>VictorFlow</strong> Templates - Powered by <strong>Webflow</strong></p>
			</div>
		</footer>
	)
}

Footer.defaultProps = {
    title: 'Organick',
};

Footer.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Footer