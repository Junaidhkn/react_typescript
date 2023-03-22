import React from 'react';

// use types when building applications and interfaces when developing libraries

type greetProps = {
	name: string;
};

const Greet = (props: greetProps) => {
	return (
		<div>
			<h1>Welcome {props.name}, you have alot of notifications today</h1>
		</div>
	);
};

export default Greet;
