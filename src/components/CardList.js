import React from 'react';
import Card from './Card.js';

const CardList = ({robots}) => {
	return (
		<div>
			{ // makes the section in here act as JS
				robots.map((robot, i) => {
					return (
						<Card
						key={robot.id}
						id={robot.id}
						name={robot.name}
						username={robot.username}
						email={robot.email}
						/>
					);
				})
			}
		</div>
	);
}

// const CardList = ({robots}) => {
// 	const cardsArray = robots.map((robot, i) => {
// 		return (
// 			<Card
// 			key={robot.id}
// 			id={robot.id}
// 			name={robot.name}
// 			username={robot.username}
// 			email={robot.email}
// 			/>
// 		);
// 	});
// 	return (
// 		<div>
// 			{cardsArray}
// 		</div>
// 	);
// }

export default CardList
