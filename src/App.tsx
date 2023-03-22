import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';

const App = () => {
	const personName = {
		first: 'Junaid',
		last: 'Hassan Khan',
	};
	return (
		<div className='App'>
			<Greet
				name='Junaid'
				isLoggedIn={true}
				notificationCount={20}
			/>
			<Person name={personName} />
		</div>
	);
};

export default App;
