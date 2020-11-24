import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/gold-logo.png';

import './index.css';

export default function Footer() {
	const handleClick = (url) => {
		window.open(url, '_blank', 'noopener, noreferrer');
	};

	return (
		<div id='footer-container'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-4 col-md-6 mb-4 mb-lg-0'>
						<img src={logo} alt='' className='img-fluid' id='footer-logo' />
						<p className='font-italic text-muted'>
							I'm here to help you shine your light.
						</p>
						<ul className='list-inline mt-4 social-links'>
							<li className='list-inline-item text-muted'>
								<i
									className='fa fa-facebook'
									onClick={() => handleClick('https://www.facebook.com/fauxxibeauty/')}
								/>
							</li>
							<li className='list-inline-item text-muted'>
								<i
									className='fa fa-instagram'
									onClick={() => handleClick('https://www.instagram.com/chona.lei/?hl=en')}
								/>
							</li>
						</ul>
					</div>
					<div className='col-lg-2 col-md-6 mb-4 mb-lg-0'>
						<h6 className='text-uppercase font-weight-bold mb-4'>LINKS</h6>
						<ul className='list-unstyled mb-0 footer-links'>
							<li className='mb-2'>
								<Link className='text-muted' to='/'>
									HOME
								</Link>
							</li>
							<li className='mb-2'>
								<Link className='text-muted' to='/services'>
									SERVICES
								</Link>
							</li>
							<li className='mb-2'>
								<Link className='text-muted' to='/products'>
									PRODUCTS
								</Link>
							</li>
						</ul>
					</div>
					<div className='col-lg-2 col-md-6 mb-4 mb-lg-0'>
						<h6 className='text-uppercase font-weight-bold mb-4'>Company</h6>
						<ul className='list-unstyled mb-0 footer-links'>
							<li className='mb-2'>
								<Link className='text-muted' to='/about'>
									ABOUT
								</Link>
							</li>
							<li className='mb-2'>
								<Link className='text-muted' to='/forms'>
									FORMS
								</Link>
							</li>
							<li className='mb-2'>
								<Link className='text-muted' to='/contact'>
									CONTACT
								</Link>
							</li>
							<li className='mb-2'>
								<Link className='text-muted' to='/reviews'>
									REVIEWS
								</Link>
							</li>
						</ul>
					</div>
					<div className='col-lg-4 col-md-6 mb-lg-0'>
						<h6 className='text-uppercase font-weight-bold mb-4'>Newsletter</h6>
						<p className='text-muted mb-4'>Join for updates and deals!</p>
						<div className='p-1 rounded border'>
							<div className='input-group'>
								<input
									type='email'
									placeholder='Enter your email address'
									aria-describedby='button-addon1'
									className='form-control border-0 shadow-0'
								/>
								<div className='input-group-append'>
									<button id='button-addon1' type='submit' className='btn btn-link'>
										<i className='fa fa-paper-plane' />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-light' id='footer-note'>
					<p className='text-muted'>&copy; Copyright 2020, Fauxxi Beauty. All rights reserved.</p>
			</div>
		</div>
	);
}
