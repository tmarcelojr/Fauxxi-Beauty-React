import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Opener from './Components/Opener'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
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
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
					</Switch>
				</div>
			}
		</div>
	);
}
