import React from 'react'

const Card = ({name, email}) => { // destrucring the the props in the paramerts
	return (
		// background light green
		// display inline block
		// border radius 3 1rem
		// padding all 3 1rem
		// margins all 2 0.5rem
		// grow animation
		// border width 2 - 1rem
		// box Shaddow no. 5
		// text center
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
				<img alt='robot' src={`https://robohash.org/${name}?200x200`}/>
				<div>
						<h2>{name}</h2>
						<p>{email}</p>
				</div>
		</div>
	);
}

export default Card
