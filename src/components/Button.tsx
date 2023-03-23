import React from 'react';

type ButtonProps = {
	handleClick: () => void;
};

const Button = (props: ButtonProps) => {
	return <button onClick={props.handleClick}>Click ME</button>;
};

export default Button;
