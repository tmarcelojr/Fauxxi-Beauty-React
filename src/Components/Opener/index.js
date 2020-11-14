import React, { useEffect } from 'react'
import logo from '../../Images/gif-logo.gif'
import './index.css'

export default function Opener(props) {

  useEffect(() => {
    let timer = setTimeout(() => {
      // Opener will show for set time
      props.onChange(true)
      // Remove ball dom elements from Opener
      let balls = document.querySelectorAll('.ball')
      balls.forEach(ball => ball.remove())
    }, 3000)
    // clear Timeout
    return () => { clearTimeout(timer) }
	}, [props])
	
    //========== Sparkle animation on load ==========
	// Some random colors
	const colors = [ '#d4af37', '#f6e3bd', '#e0c56e', '#daa520', '#e7c97c' ];
	const numBalls = 10;
	const balls = [];

	for (let i = 0; i < numBalls; i++) {
		let ball = document.createElement('div');
		ball.classList.add('ball');
		ball.style.background = colors[Math.floor(Math.random() * colors.length)];
		ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
		ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
		ball.style.transform = `scale(${Math.random()})`;
		ball.style.width = `${Math.random()}em`;
		ball.style.height = ball.style.width;

		balls.push(ball);
		document.body.append(ball);
	}

	// Keyframes
	balls.forEach((el, i, ra) => {
		let to = {
			x: Math.random() * (i % 2 === 0 ? -11 : 11),
			y: Math.random() * 12
		};

		let anim = el.animate(
			[ { transform: 'translate(0, 0)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` } ],
			{
				duration: (Math.random() + 1) * 2000, // random duration
				direction: 'alternate',
				fill: 'both',
				iterations: Infinity,
				easing: 'ease-in-out'
			}
		);
  });	
  /* 
    Sparkle effects by Nash Vail
    https://csspoint101.com/30-css-animated-background/
  */ 
  return(
    <div className="opener">
      <img src={logo} alt="CLaesthetics" className="img-fluid logo" />
    </div>
   )
}