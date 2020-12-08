import React from 'react';
import './index.css';

export default function About() {
	return (
		<div class='accordion' id='aboutAccordion'>
			<div class='card'>
				<div class='card-header' id='headingOne'>
					<h2 class='mb-0'>
						<button type='button' class='btn btn-link faq' data-toggle='collapse' data-target='#collapseOne'>
							WHAT PRODUCTS ARE USED FOR THE APPLICATION OF EYELASH EXTENSIONS?
						</button>
					</h2>
				</div>
				<div id='collapseOne' class='collapse' aria-labelledby='headingOne' data-parent='#aboutAccordion'>
					<div class='card-body'>
						<u>High quality Xtreme Lashes® products:</u>
						<p className='py-2 mx-3'>
							1. <b>FlexFusion® Adhesive with Rapid Cure Technology®</b> - The first and ONLY
							medical-grade black eyelash extension adhesive. Ideal for very sensitive eyes. This
							hypoallergenic, <b>medical-grade</b> eyelash extension adhesive features an upgraded
							formulation that delivers enhanced curing (drying) speed and a thinner, easier-to-use
							viscosity for expert, seamless attachment. Hypoallergenic and Dermatologist tested with
							exceptionally low fume and odor. Manufactured to ISO 13485:2003 Quality Management
							Standards. Made in the USA at an FDA-registered facility. Use in conjunction with Eyelash
							Primer during every full set and Relash™ application. This essential product dissolves
							residual oils and optimizes natural eyelash pH, resulting in an ideal foundation for faster,
							more seamless, and longer-lasting attachment.
						</p>
						<p className='mx-3'>
							2. <b>Faux Mink Bold!</b> - Designed with short tapered tips, Faux Mink Bold eyelash
							extensions deliver high-impact color payoff, stunning definition, and comfortable
							long-lasting wear. Ideal for use on clients with sparse to full natural lash lines, this
							groundbreaking eyelash extension opens doors to limitless beauty and artistic design.
							Bolder, more visible tips deliver dramatic color payoff and definition. Lightweight and
							comfortable to wear, when dry or wet. Enhanced ease of use and speed with the new
							platform-style packaging. Additional space between each strip for more efficient access.
						</p>
						<p className='mx-3'>
							3. <b>Eye Makeup Remover & Facial Cleanser</b> - Soothing Aloe Vera Juice-based formula
							gently cleanses and moisturizes skin while conditioning lashes and brows. Coconut-derived
							cleansing agent removes impurities and makeup while anti-oxidant and vitamin-rich botanical
							extracts including rosehip, chamomile, eyebright and cucumber calm, refresh and nourish and
							protect for a daily beauty treatment. Over 90% natural with no artificial colors,
							fragrances, dyes, or mineral oil. Sulfate-free - won't irritate or strip your skin of
							natural oils. Formulated to be used on eyelash extensions and natural lashes. Ideal for all
							skin types, even sensitive skin.
						</p>
						<p className='mx-3'>
							4. <b>Eyelash Primer</b> - Accelerate fixture (attachment) time and promote eyelash
							extension longevity with this custom formulated primer. This innovative solution creates an
							optimal pH on the surface of natural eyelashes, resulting in an ideal foundation for fast
							attachment and strong adhesion. Promotes longevity and helps achieve seamless connectivity.
							Dissolves residual oils and optimizes natural eyelash pH to promote eyelash extension
							attachment.
						</p>
					</div>
				</div>
			</div>
			<div class='card'>
				<div class='card-header' id='headingTwo'>
					<h2 class='mb-0'>
						<button
							type='button'
							class='btn btn-link faq collapsed'
							data-toggle='collapse'
							data-target='#collapseTwo'
						>
							WHAT IS FORMALDEHYDE AND WHY IS IT IMPERATIVE FOR ME TO KNOW ABOUT IT?
						</button>
					</h2>
				</div>
				<div id='collapseTwo' class='collapse show' aria-labelledby='headingTwo' data-parent='#aboutAccordion'>
					<div class='card-body'>
						<p className='py-2 mx-3'>
							This is vital to know since a lot of adhesives used for eyelash extensions in the market
							contain formaldehyde. ALL Xtreme Lashes® adhesives are non-formaldehyde products. According
							to research, formaldehyde poses a significant danger to human health. In 2011, the US
							National Toxicology Program described formaldehyde as known to be a human carcinogen. At
							concentrations above 0.1 ppm in air, formaldehyde can irritate the eyes and mucous membranes
							resulting in watery eyes. Formaldehyde inhaled at this concentration may cause headaches, a
							burning sensation in the throat, and difficulty breathing, and can trigger or aggravate
							asthma symptoms. For your health and safety, please consider this information when choosing
							where to go to for application of your eyelash extensions. Safety is as simple as
							ABC...always be careful.
						</p>
					</div>
				</div>
			</div>
			<div class='card'>
				<div class='card-header' id='headingThree'>
					<h2 class='mb-0'>
						<button
							type='button'
							class='btn btn-link faq collapsed'
							data-toggle='collapse'
							data-target='#collapseThree'
						>
							ARE THESE THE SAME AS INDIVIDUAL OR FLARE LASHES OFFERED AT NAIL SALONS?
						</button>
					</h2>
				</div>
				<div id='collapseThree' class='collapse' aria-labelledby='headingThree' data-parent='#aboutAccordion'>
					<div class='card-body'>
						<p className='py-2 mx-3'>
							No, they are not the same. These soft faux mink eyelash extensions which lasts 4-6 weeks
							with proper care. Also, they do not damage your lashes. 'Individuals' or 'flares' lasts1-2
							weeks. They are heavy lashes placed on your natural eyelashes causing them to damage and
							weaken...resulting in permanent loss of your lashes.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
