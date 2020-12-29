import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/navbar-logo.png'
import './index.css';

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-md navbar-light" id="wrapper">
			<div className="container-fluid">
				<div id='media-logo-container'>
					<Link className='nav-link' to='/'>
						<img className='img-fluid' id="navbar-logo" src={logo} alt="Claesthetics"/>
					</Link>
				</div>
				<button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarMenu">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarMenu">
					<ul className="navbar-nav text-right">
						<li className="nav-item">
							<Link className="nav-link hover-10" to="/">
								Home
								<span className="sr-only">(current)</span>
							</Link>
						</li>

						<li className="nav-item ">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/services">
								Services
							</Link>
						</li>

						<div id='logo-container'>
							<Link className='nav-link' to='/'>
								<img className='img-fluid' id="navbar-logo" src={logo} alt="Claesthetics"/>
							</Link>
						</div>

						<li className="nav-item">
							<Link className="nav-link" to="/products">
								Products
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/reviews">
								Reviews
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
