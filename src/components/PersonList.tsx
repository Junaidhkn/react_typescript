type ListProps = {
	nameList: {
		first: string;
		last: string;
	}[];
};

const PersonList = (props: ListProps) => {
	return (
		<div>
			{props.nameList.map((name) => {
				return (
					<h2>
						{name.first} {name.last}
					</h2>
				);
			})}
		</div>
	);
};

export default PersonList;
