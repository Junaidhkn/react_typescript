import React from 'react';

// use types when building applications and interfaces when developing libraries

type greetProps = {
	name: string;
	notificationCount?: number;
	isLoggedIn: boolean;
	children: React.ReactNode;
};

const Greet = (props: greetProps) => {
	const { notificationCount = 0 } = props;
	return (
		<div>
			{props.isLoggedIn ? (
				<h1>
					Welcome {props.name}, you have {notificationCount} notifications today
				</h1>
			) : (
				<h1>Welcome Guest</h1>
			)}
			{props.children}
		</div>
	);
};

export default Greet;
