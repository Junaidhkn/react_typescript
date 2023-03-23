type ButtonProps = {
	onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
	return <button onClick={props.onClickHandler}>Click ME</button>;
};

export default Button;
