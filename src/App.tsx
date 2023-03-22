import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

const App = () => {
	const personName = {
		first: 'Junaid',
		last: 'Hassan Khan',
	};

	const nameList = [
		{
			first: 'Usama',
			last: 'Khan',
		},
		{
			first: 'Junaid',
			last: 'Niazi',
		},
		{
			first: 'Shah',
			last: 'Gi',
		},
	];

	return (
		<div className='App'>
			<Greet
				name='Junaid'
				isLoggedIn={true}
				notificationCount={20}
			/>
			<Person name={personName} />
			<PersonList nameList={nameList} />
		</div>
	);
};

export default App;
