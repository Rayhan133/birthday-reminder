import React, { useState } from 'react';
import './App.css';
import List from './List';
import data from './Data';
function App() {
	const [person, setPerson] = useState(data);

	return (
		<div className="App">
			<div className="container">
				<h3>{person.length} Birthdays Today</h3>
				<List person={person} />
				<button onClick={() => setPerson([])}>Clear All</button>
			</div>
		</div>
	);
}

export default App;
