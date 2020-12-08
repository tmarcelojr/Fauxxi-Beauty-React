import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/horizontal-logo.png';
import './index.css';

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light" id="wrapper">
			<div className="container-fluid">
				<Link id="navbar-logo">
					<img className="img-fluid" src={logo} alt="CLaesthetics" />
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarMenu">
					<ul className="navbar-nav ml-auto text-right">
						<li className="nav-item active">
							<Link className="nav-link hover-10" to="/">
								Home
								<span className="sr-only">(current)</span>
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/services">
								Services
							</Link>
						</li>

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

		// <nav className="navbar navbar-expand-lg navbar-light" id="wrapper">
		// 		<div className="" id="logo-container">
		// 			<img src={logo} alt="CLaesthetics" id="navbar-logo" className="img-fluid" />
		// 		</div>
		// 	<div className="container-fluid px-0 mx-0">
		// 		<div className="ml-auto">
		// 			<button
		// 				className="navbar-toggler"
		// 				type="button"
		// 				data-toggle="collapse"
		// 				data-target="#navbarResponsive"
		// 				aria-controls="navbarResponsive"
		// 				aria-expanded="false"
		// 				aria-label="Toggle navigation"
		// 			>
		// 				<span className="navbar-toggler-icon" />
		// 			</button>
		// 		</div>
		// 		<div className="collapse navbar-collapse navbar-list" id="navbarResponsive">
		// 			<div id="navbar-list-section">
		// 				<ul className="navbar-nav">
		// <li className="nav-item active">
		// 	<Link className="nav-link hover-10" to="/">
		// 		Home
		// 		<span className="sr-only">(current)</span>
		// 	</Link>
		// </li>

		// <li className="nav-item">
		// 	<Link className="nav-link" to="/about">
		// 		About
		// 	</Link>
		// </li>

		// <li className="nav-item">
		// 	<Link className="nav-link" to="/services">
		// 		Services
		// 	</Link>
		// </li>

		// <li className="nav-item">
		// 	<Link className="nav-link" to="/products">
		// 		Products
		// 	</Link>
		// </li>

		// <li className="nav-item">
		// 	<Link className="nav-link" to="/reviews">
		// 		Reviews
		// 	</Link>
		// </li>

		// <li className="nav-item">
		// 	<Link className="nav-link" to="/contact">
		// 		Contact
		// 	</Link>
		// </li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>
	);
}
