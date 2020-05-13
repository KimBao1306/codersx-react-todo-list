import React, {Component} from 'react';
import './App.css';

import Table from './components/table/Table';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Table
					users={[
						{first: 'Bao', last: 'Le', handle: '@ble'},
						{first: 'Bao', last: 'Le', handle: '@ble'},
						{first: 'Bao', last: 'Le', handle: '@ble'},
						{first: 'Bao', last: 'Le', handle: '@ble'},
						{first: 'Bao', last: 'Le', handle: '@ble'},
						{first: 'Bao', last: 'Le', handle: '@ble'},
						{first: 'Bao', last: 'Le', handle: '@ble'},
					]}
				/>
			</div>
		);
	}
}

export default App;
