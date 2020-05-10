import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
	const todos = ['Go to market', 'Buy food', 'Make dinner'];
	return (
		<div className="App">
			<ul>
				{todos.map((work) => (
					<li>{work}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
