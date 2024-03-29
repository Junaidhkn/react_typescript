type ListProps = {
	nameList: {
		id: string;
		first: string;
		last: string;
	}[];
};

const PersonList = (props: ListProps) => {
	return (
		<div>
			{props.nameList.map((name) => {
				return (
					<h2 key={name.id}>
						{name.first} {name.last}
					</h2>
				);
			})}
		</div>
	);
};

export default PersonList;
