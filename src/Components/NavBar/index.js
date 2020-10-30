import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function NavBar() {
	return (
		<nav className='navbar navbar-expand-md navbar-light static-top'>
			<div className='container-fluid'>
				<div id='navbar-logo'>Fauxxi-Beauty</div>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarResponsive'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='toggle navbar'
				>
					<span className='navbar-toggler-icon' />
				</button>
        <div className='collapse navbar-collapse text-right' id='navbarResponsive'>
          <ul className='navbar-nav ml-auto'>
          <li 
              className='nav-item active' 
              data-toggle='collapse' 
              data-target='#navbarResponsive'
            >
							<Link className='nav-link hover-10' to='/'>
								Home
								<span className='sr-only'>(current)</span>
							</Link>
						</li>

            <li 
              className='nav-item'
              data-toggle='collapse' 
              data-target='#navbarResponsive'
            >
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>

            <li 
              className='nav-item'
              data-toggle='collapse' 
              data-target='#navbarResponsive'
            >
							<Link className='nav-link' to='/services'>
								Services
							</Link>
						</li>

            <li 
              className='nav-item'
              data-toggle='collapse' 
              data-target='#navbarResponsive'
            >
							<Link className='nav-link' to='/products'>
								Products
							</Link>
						</li>

            <li 
              className='nav-item'
              data-toggle='collapse' 
              data-target='#navbarResponsive'
            >
							<Link className='nav-link' to='/reviews'>
								Reviews
							</Link>
						</li>

            <li 
              className='nav-item'
              data-toggle='collapse' 
              data-target='#navbarResponsive'
            >
							<Link className='nav-link' to='/forms'>
								Forms
							</Link>
						</li>

            <li 
              className='nav-item'
              data-toggle='collapse' 
              data-target='#navbarResponsive'
            >
							<Link className='nav-link' to='/contact'>
								Contact
							</Link>
						</li>
          </ul>
        </div>
			</div>
		</nav>
	)
}
