import React, {Component} from 'react';
// import './App.css';
import RecommendedFriends from './components/recommended/RecommendedFriends.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<RecommendedFriends
					friends={[
						{img: 'https://picsum.photos/50/50', name: 'Bao Le'},
						{img: 'https://picsum.photos/50/50', name: 'Thinh Pham'},
						{img: 'https://picsum.photos/50/50', name: 'Bao Huynh'},
					]}
				/>
			</div>
		);
	}
}

export default App;
