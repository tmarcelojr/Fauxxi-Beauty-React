import React from 'react';
import supremefullset from '../../Images/supreme-full-set.jpg';
import ombremicroshading from '../../Images/ombre-microshading.JPG';
import glamfullset from '../../Images/glam-full-set.jpg';
import one from '../../Images/1.jpg';
import two from '../../Images/2.jpg';
import three from '../../Images/3.jpg';
import four from '../../Images/4.jpg';
import five from '../../Images/5.jpg';
import six from '../../Images/6.jpg';
import seven from '../../Images/7.jpg';
import eight from '../../Images/8.jpg';
import nine from '../../Images/9.jpg';
import ten from '../../Images/10.jpg';
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
			
			{/* {gallery container} */}
			{/* <div className="gallery-container">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={one} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={two} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={three} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={four} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={five} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={six} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={seven} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={eight} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={nine} alt="" />
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<img className="img-fluid img-thumbnail" src={ten} alt="" />
					</div>
				</div>
			</div> */}


		</div>
	);
}
