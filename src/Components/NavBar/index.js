import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/gold-logo.png'
import './index.css';

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light static-top" id="wrapper">
			<div className="container-fluid">
				<div id='logo-container'>
					<div id='logo'>
					<Link to='/'>
						<img id='navbar-logo' src={logo} alt="navbar-logo" className="img-fluid"/>
					</Link>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
				</div>
				<div className="collapse navbar-collapse navbar-list" id="navbarResponsive">
					<div id='navbar-list-section'>
						<ul className="navbar-nav">
							<li 
								className="nav-item active" 
							>
								<Link className="nav-link hover-10" to="/">
									Home
									<span className="sr-only">(current)</span>
								</Link>
							</li>

							<li 
								className="nav-item"
							>
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>

							<li 
								className="nav-item"
							>
								<Link className="nav-link" to="/services">
									Services
								</Link>
							</li>

							<li 
								className="nav-item"
							>
								<Link className="nav-link" to="/products">
									Products
								</Link>
							</li>

							<li 
								className="nav-item"
							>
								<Link className="nav-link" to="/reviews">
									Reviews
								</Link>
							</li>

							<li 
								className="nav-item"
							>
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
						</ul>

					</div>
				</div>
			</div>
		</nav>
	);
}
