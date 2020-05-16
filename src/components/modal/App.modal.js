import React, {Component} from 'react';
import './App.css';

import Modal from './components/modal/Modal';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpenModal: false,
		};
	}

	openModal = () => {
		this.setState({
			isOpenModal: true,
		});
	};

	closeModal = () => {
		this.setState({
			isOpenModal: false,
		});
	};

	render() {
		return (
			<div className="App">
				<button
					style={{padding: '10px 20px', outline: 'none', marginTop: '20px'}}
					onClick={this.openModal}
				>
					Open Modal
				</button>
				{this.state.isOpenModal && <Modal eventCloseModal={this.closeModal} />}
			</div>
		);
	}
}

export default App;
