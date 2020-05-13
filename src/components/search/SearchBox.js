import React from 'react';
import classNames from 'classnames';

import './SearchBox.css';

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFocused: false,
		};

		this.isFocused = this.isFocused.bind(this);
		this.isBlur = this.isBlur.bind(this);
	}

	isFocused() {
		this.setState({
			isFocused: true,
		});
	}

	isBlur() {
		this.setState({
			isFocused: false,
		});
	}

	render() {
		console.log('render');
		return (
			<div className="form-group">
				<input
					type="text"
					placeholder="Type something to search..."
					onFocus={this.isFocused}
					onBlur={this.isBlur}
				/>
				<div
					className={classNames('icon-search', {
						'bg-purple': this.state.isFocused,
					})}
				>
					<a href="#">
						<img src="https://cdn.glitch.com/5a485163-f15e-4c37-9e92-41225e59abeb%2Fsearch.png?v=1589389555222" />
					</a>
				</div>
			</div>
		);
	}
}
