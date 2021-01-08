import React from 'react'
import './index.css'
import logo from '../../Images/gold-logo.png'

const Products = () => {
  const openStore = () => {
    window.open('https://glymedplus.io/home/index?store=0018057', '_blank', 'noopener, noreferrer')
  }
  return (
    <div className='products-container'>
      <div id='carouselExampleIndicators' className='carousel slide w-100' data-ride='carousel'>
				<ol className='carousel-indicators'>
					<li data-target='#carouselExampleIndicators' data-slide-to='0' className='active' />
					<li data-target='#carouselExampleIndicators' data-slide-to='1' />
					<li data-target='#carouselExampleIndicators' data-slide-to='2' />
				</ol>
				<div className='carousel-inner w-100' onClick={() => openStore()}>
					<div className='carousel-item active'>
						<img
							className='d-block w-100'
							src='https://storage.googleapis.com/regen-content/image/banner/banner_portrait_skincare_bootcamp@2x.png'
							alt='First slide'
						/>
					</div>
					<div className='carousel-item'>
						<img
							className='d-block w-100'
							src='https://storage.googleapis.com/regen-content/image/features/carousel/carousel_gm405.png'
							alt='Second slide'
						/>
					</div>
					<div className='carousel-item'>
						<img
							className='d-block w-100'
							src='https://storage.googleapis.com/regen-content/image/features/carousel/carousel_shop_all.png'
							alt='Third slide'
						/>
					</div>
				</div>
				<a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true' />
					<span className='sr-only'>Previous</span>
				</a>
				<a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true' />
					<span className='sr-only'>Next</span>
				</a>
			</div>

			<div className='video-container embed-responsive embed-responsive-16by9'>
				<iframe
					title='glymedplus-antiaging'
					width='560'
					height='315'
					src='https://www.youtube.com/embed/QF0VOZZfbxA'
					frameBorder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
			</div>

			<div className='products-display'>
				<div className='row justify-content-center'>
					<div className='headline-border' id='products-headline'>
						<img className='img-fluid' src={logo} alt='chonaleiaestheticslogo' />
            <p className='text-muted'><u>Check out these amazing products. Click to enter my retailer store.</u></p>
					</div>

					<div className='col-12'>
						<a
							className='carousel-control-prev'
							href='#carouselExampleIndicators2'
							role='button'
							data-slide='prev'
						>
							<span className='carousel-control-prev-icon carousel-icon' aria-hidden='true' />
							<span className='sr-only'>Previous</span>
						</a>

						<div id='carouselExampleIndicators2' className='carousel slide ' data-ride='carousel'>
							<div className='carousel-inner'>
								<div className='carousel-item active'>
									<div className='row justify-content-center'>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM57.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Mega-Purifying Cleanser (GM57)</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card '
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM1.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Gentle Facial Wash (GM1)</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM8.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Anti-Aging Exfoliant Masque (GM8)</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='carousel-item'>
									<div className='row justify-content-center'>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM25.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>
														Wrinkle Prescription Masque with PC10 (GM25)
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM400.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Professional CBD Booster (GM400)</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM32.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Skin Restoring Fulvic Elixir (GM32)</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='carousel-item'>
									<div className='row justify-content-center'>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM90.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Stem Cell Power Serum (GM90)</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM94.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>DNA Reset Face & Neck Cream (GM94)</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM59.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Cell Protection Serum (GM59)</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='carousel-item'>
									<div className='row justify-content-center'>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM69.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Ultra Hydro Gel (GM69)</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM17-15.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>
														Photo-Age Environmental Protection Gel 15 (GM17-15)
													</p>
												</div>
											</div>
										</div>
										<div className='col-md-3 mb-3 products-carousel'>
											<div
												className='card product-card'
												onClick={() => openStore()}
											>
												<img
													className='img-fluid'
													alt='100%x280'
													src='https://storage.googleapis.com/regen-content/image/product/standard/GM55-30.png'
												/>
												<div className='card-body product-card-body'>
													<p className='card-text'>Lactic Action 30 Exfoliator (GM55-30)</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* carousel-inner */}
						</div>

						<a
							className='carousel-control-next'
							href='#carouselExampleIndicators2'
							role='button'
							data-slide='next'
						>
							<span className='carousel-control-next-icon carousel-icon' aria-hidden='true' />
							<span className='sr-only'>Next</span>
						</a>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Products

