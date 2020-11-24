import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Opener from './Components/Opener'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services'
import Contact from './Components/Contact'
import './App.css';

export default function App() {
	const [ loaded, setLoaded ] = useState(false);
	
	const handleChange = value => {
		setLoaded(value)
	}

	return (
		<div>
      {loaded === false
      ? <Opener loaded={loaded} onChange={handleChange}/>
			:
				<div id='app'>
					<NavBar />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/services'>
							<Services />
						</Route>
						<Route exact path='/products'>
							
						</Route>
						<Route exact path='/reviews'>
							
						</Route>
						<Route exact path='/contact'>
							<Contact />
						</Route>
					</Switch>
					<Footer />
				</div>
			}
		</div>
	);
}
