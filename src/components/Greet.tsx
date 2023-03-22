import React from 'react';

// use types when building applications and interfaces when developing libraries

type greetProps = {
	name: string;
	notificationCount: number;
	isLoggedIn: boolean;
};

const Greet = (props: greetProps) => {
	return (
		<div>
			{props.isLoggedIn ? (
				<h1>
					Welcome {props.name}, you have {props.notificationCount} notifications
					today
				</h1>
			) : (
				<h1>Welcome Guest</h1>
			)}
		</div>
	);
};

export default Greet;
