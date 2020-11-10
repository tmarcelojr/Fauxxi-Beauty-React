import React from 'react';
import supremefullset from '../../Images/supreme-full-set.jpg';
import ombremicroshading from '../../Images/ombre-microshading.JPG';
import glamfullset from '../../Images/glam-full-set.jpg';
import two from '../../Images/2.jpg';
import one from '../../Images/1.jpg';
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
		<div className='home-page-container'>
			<div className='image-container'>
				<div className='background-image'>
					<div className='button-container'>
						<div id='book-now-button'>
							<a href='/services'>
								<button className='svg-btn'>
									<svg viewBox='0 0 180 60' preserveAspectRatio='none'>
										<polyline points='179,1 179,59 1,59 1,1 179,1' className='bg-line' />
										<polyline points='179,1 179,59 1,59 1,1 179,1' className='hl-line' />
									</svg>
									<span>BOOK NOW</span>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* image-container */}
			<div className='headline-border'>MUST HAVES</div>
			<div className='must-have-container'>
				<div className='section-1'>
          <div className='must-have-image-container'>
            <img className='img-fluid must-have-image' src={supremefullset} alt='Supreme Full Set' />
          </div>
					<div className='must-have-text'>
						<div>
							<div className='must-have-text-title'>SUPREME FULL SET</div>
							<div>Dark Brown D curl 0.15, 9-13mm..& Black D curl 0.12 9-13mm</div>
							<div className='must-have-button-container'>
								<div className='must-have-button' id='must-have-btn1'>
									<a href='/services'>
										<button className='svg-btn'>
											<svg viewBox='0 0 180 60' preserveAspectRatio='none'>
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='bg-line' />
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='hl-line' />
											</svg>
											<span>BOOK NOW</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='section-2'>
					<div className='must-have-text'>
						<div>
							<div className='must-have-text-title'>MICROSHADING</div>
							<div>Wake up flawless everyday. You deserve it.</div>
							<div className='must-have-button-container'>
								<div className='must-have-button'>
									<a href='/services'>
										<button className='svg-btn'>
											<svg viewBox='0 0 180 60' preserveAspectRatio='none'>
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='bg-line' />
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='hl-line' />
											</svg>
											<span>BOOK NOW</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
          <div className='must-have-image-container'>
					<img className='img-fluid must-have-image' src={ombremicroshading} alt='Ombre Microshading' />

          </div>
				</div>

				<div className='section-3'>
        <div className='must-have-image-container'>
					<img className='img-fluid must-have-image' src={glamfullset} alt='Glamorous Full Set' />
        </div>
					<div className='must-have-text'>
						<div>
							<div className='must-have-text-title'>GLAMOROUS FULL SET</div>
							<div>Good lashes. Good mood. Better you.</div>
							<div className='must-have-button-container'>
								<div className='must-have-button'>
									<a href='/services'>
										<button className='svg-btn'>
											<svg viewBox='0 0 180 60' preserveAspectRatio='none'>
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='bg-line' />
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='hl-line' />
											</svg>
											<span>BOOK NOW</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{' '}
			{/* must-have-container */}
			<div className='headline-border'> GLAMOUR </div>
			{/*       
      <div className='quote-container'>
      'People will stare, make it worth their while.' - H. Winston
      </div> */}
			<div className='headline-border'> RAW BEAUTY </div>
			{/* <div id='raw-beauty-image-container'>
        <div className='image-section'>
          <div className='homepage-image'><img src={one} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={two} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={three} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={four} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={five} alt='IG_img'></img></div>
        </div>
        <div className='image-section'>
          <div className='homepage-image'><img src={six} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={seven} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={eight} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={nine} alt='IG_img'></img></div>
          <div className='homepage-image'><img src={ten} alt='IG_img'></img></div>
        </div>
      </div> */}
		</div> //home-page-container
	);
}
