import React from 'react';
import classNames from 'classnames';

import './SearchBox.css';

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isFocused: false,
			isValidPhone: false,
		};

		this.isValidPhone = this.isValidPhone.bind(this);
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

	isValidPhone(e) {
		if (e.target.value.length > 10 || !e.target.value.startsWith('090')) {
			this.setState({
				isValidPhone: true,
			});
		} else {
			this.setState({
				isValidPhone: false,
			});
		}
	}

	render() {
		return (
			<div className="form-group">
				<input
					className={classNames({'err-border': this.state.isValidPhone})}
					type="text"
					placeholder="Type something to search..."
					onChange={this.isValidPhone}
					onFocus={this.isFocused}
					onBlur={this.isBlur}
				/>
				<div
					className={classNames('icon-search', {
						'bg-purple': this.state.isFocused,
					})}
				>
					<a href="###">
						<img
							src="https://cdn.glitch.com/5a485163-f15e-4c37-9e92-41225e59abeb%2Fsearch.png?v=1589389555222"
							alt="search icon"
						/>
					</a>
				</div>
			</div>
		);
	}
}
