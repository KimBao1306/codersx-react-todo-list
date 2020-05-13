import React, {Component} from 'react';
import './App.css';

import Notification from './components/notification/Notification';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Notification hasUnread={true} />
			</div>
		);
	}
}

export default App;
