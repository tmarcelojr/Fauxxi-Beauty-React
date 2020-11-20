import React, { useState } from 'react'
import './index.css'

export default function Contact() {
  // Values
  const [values, setValues] = useState({})
  const [successMessage, setSuccessMessage] = useState(false)

  const onSubmit = async (e) => {
		console.log('we in here', process.env.REACT_APP_API_URL)
    e.preventDefault()
    try {
			const sendMessageRes = await fetch(process.env.REACT_APP_API_URL + '/contact', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const sendMessageJson = await sendMessageRes.json();
			if (sendMessageJson.status === 201) {
				setSuccessMessage(true);
				return 'Message sent.';
			} else {
				return 'Message not sent.';
			}
		} catch (err) {
			console.log(err);
		}
  }

  return (
    <div className='contact-container'>
			<header>
				<h2>Contact me</h2>
				<p>I'm here to help you shine your light.</p>
			</header>
			<hr style={{ width: '80%' }} />
			<div className='container-fluid' id='contact-area'>
				<div className='row' id='contact-section1'>
					<div className='col-md-5' id='information-area'>
						<div className='mapouter'>
							<div className='gmap_canvas'>
								<iframe
									title='google-maps'
									width='100%'
									height='300'
									id='gmap_canvas'
									src='https://maps.google.com/maps?q=500%20W%20Lanier%20Ave%2C%20Fayetteville%2C%20GA%2030214&t=&z=17&ie=UTF8&iwloc=&output=embed'
									frameBorder='0'
									scrolling='no'
									marginHeight='0'
									marginWidth='0'
								/>
								<a
									href='https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/'
									alt='Embedded Google Maps'
								>
								</a>
							</div>
						</div>
						{/* contact-map */}
						<div id='information-details'>
							<p>
								Location:<a
									href='http://maps.google.com/maps?q=500+W+Lanier+Ave,+Fayetteville,+GA+30214'
									target='_blank'
									rel='noopener noreferrer'
								>
									Magnolia Office Park
								</a>
							</p>
							<p>
								Address:
								<a
									href='http://maps.google.com/maps?q=500+W+Lanier+Ave,+Fayetteville,+GA+30214'
									target='_blank'
									rel='noopener noreferrer'
								>
									500 W Lanier Ave, Fayetteville, GA 30214
								</a>
							</p>
							<p>
								Text: <a href='tel:+16785885536'> 678.588.5536</a>
							</p>
						</div>
					</div>

					<div className='col-md-7' id='form-area'>
						<form onSubmit={onSubmit}>

							<div className='form-group'>
								<input
									type='text'
                  name='name'
                  value={values.name || ''}
                  onChange={e => setValues({...values, name: e.target.value})}
									className='form-control input-area'
									placeholder='Name'
								/>
							</div>
							<div className='form-group'>
								<input
									type='email'
                  name='email'
                  value={values.email || ''}
                  onChange={e => setValues({...values, email: e.target.value})}
									className='form-control input-area'
									placeholder='Email'
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
                  name='phone'
                  value={values.phone || ''}
                  onChange={e => setValues({...values, phone: e.target.value})}
									className='form-control input-area'
									placeholder='Phone'
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
                  name='subject'
                  value={values.subject || ''}
                  onChange={e => setValues({...values, subject: e.target.value})}
									className='form-control input-area'
									placeholder='Subject'
								/>
							</div>
							<div className='form-group'>
								<textarea
                  name='message'
                  value={values.message || ''}
                  onChange={e => setValues({...values, message: e.target.value})}
									className='form-control input-area'
									placeholder='Enter message here...'
									style={{ height: '165px' }}
								/>
							</div>
							<div className='form-group' id='contact-button-area'>
								<div>{successMessage === true ? 'Message successfully sent.' : null}</div>

								<div className='send-message-button-container'>
									<div>
										<button className='svg-btn' type='submit'>
											<svg viewBox='0 0 180 60' preserveAspectRatio='none'>
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='bg-line' />
												<polyline points='179,1 179,59 1,59 1,1 179,1' className='hl-line' />
											</svg>
											<span>SEND MESSAGE</span>
										</button>
									</div>
								</div> {/* send-message-button-container */}

							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  )
}