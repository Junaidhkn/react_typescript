import './App.css';
import Button from './components/Button';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

const App = () => {
	const personName = {
		first: 'Junaid',
		last: 'Hassan Khan',
	};

	const nameList = [
		{
			id: 'sddsf',
			first: 'Usama',
			last: 'Khan',
		},
		{
			id: 'sdddfgfdsf',
			first: 'Junaid',
			last: 'Niazi',
		},
		{
			id: 'sdds34fdfg',
			first: 'Shah',
			last: 'Gi',
		},
	];

	return (
		<div className='App'>
			<Greet
				name='Junaid'
				isLoggedIn={true}>
				<Button
					onClickHandler={(event) => {
						console.log('Clicked!', event);
					}}
				/>
				<Person name={personName} />
				<PersonList nameList={nameList} />
				<Status status='loading' />
			</Greet>
		</div>
	);
};

export default App;
