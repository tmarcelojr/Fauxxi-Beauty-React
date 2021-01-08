import React from 'react';
import supremefullset from '../../Images/supreme-full-set.jpg';
import ombremicroshading from '../../Images/ombre-microshading.JPG';
import glamfullset from '../../Images/glam-full-set.jpg';
import instagram from '../../Images/1.jpg'
import facebook from '../../Images/11.jpg'
import shop from '../../Images/logo.png'
import './index.css';

export default function Home() {
	return (
		<div className="home-page-container">
			<div className="image-container">
				<div className="text-container">
					<div id="slogan">
						<p>Your aesthetics.</p>
						<p>
							<b>My expertise.</b>
						</p>
					</div>
					<div id="book-now-button">
						<a href="/services">
							<button className="svg-btn">
								<svg viewBox="0 0 180 60" preserveAspectRatio="none">
									<polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
									<polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
								</svg>
								<span>BOOK NOW</span>
							</button>
						</a>
					</div>
				</div>
			</div>

			{/* {must have container} */}
			<div className="must-have-container">
				<div className="section-1">
					<div className="must-have-image-container">
						<img className="img-fluid must-have-image" src={supremefullset} alt="Supreme Full Set" />
					</div>
					<div className="must-have-text">
						<div>
							<div className="must-have-text-title">SUPREME FULL SET</div>
							<div>Dark Brown D curl 0.15, 9-13mm..& Black D curl 0.12 9-13mm</div>
							<div className="must-have-button-container">
								<div id="book-now-button">
									<a href="/services">
										<button className="svg-btn">
											<svg viewBox="0 0 180 60" preserveAspectRatio="none">
												<polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
												<polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
											</svg>
											<span>BOOK NOW</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-2">
					<div className="must-have-text">
						<div>
							<div className="must-have-text-title">MICROSHADING</div>
							<div>Wake up flawless everyday. You deserve it.</div>
							<div className="must-have-button-container">
								<div id="book-now-button">
									<a href="/services">
										<button className="svg-btn">
											<svg viewBox="0 0 180 60" preserveAspectRatio="none">
												<polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
												<polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
											</svg>
											<span>BOOK NOW</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="must-have-image-container">
						<img className="img-fluid must-have-image" src={ombremicroshading} alt="Ombre Microshading" />
					</div>
				</div>

				<div className="section-3">
					<div className="must-have-image-container">
						<img className="img-fluid must-have-image" src={glamfullset} alt="Glamorous Full Set" />
					</div>
					<div className="must-have-text">
						<div>
							<div className="must-have-text-title">GLAMOROUS FULL SET</div>
							<div>Good lashes. Good mood. Better you.</div>
							<div className="must-have-button-container">
								<div id="book-now-button">
									<a href="/services">
										<button className="svg-btn">
											<svg viewBox="0 0 180 60" preserveAspectRatio="none">
												<polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
												<polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
											</svg>
											<span>BOOK NOW</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* {quote container} */}
			<div className="quote-container">'People will stare, make it worth their while.' - H. Winston</div>
			
			{/* {social container} */}
			<div id='social-title'>Check Us Out!</div>

			<div className="social-container">
				<div id='instagram-container'>
					<img src={instagram} alt="" className="img-fluid"/>
					<div>INSTAGRAM</div>
				</div>
				<div id='shop-container'>
				<img src={shop} alt="" className="img-fluid"/>
				<div>SHOP</div>
				</div>
				<div id='facebook-container'>
				<img src={facebook} alt="" className="img-fluid"/>
					<div>FACEBOOK</div>
				</div>
			</div>

		</div>
	);
}
