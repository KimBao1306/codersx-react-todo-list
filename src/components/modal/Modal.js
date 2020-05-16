import React from 'react';
import './Modal.css';

export default function Modal(props) {
	return (
		<div className="modal">
			<span className="modal-close" onClick={props.eventCloseModal}>
				&times;
			</span>
			<div className="modal-content">
				<h3>This is a modal 1</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className="modal-btn">
				<button onClick={props.eventCloseModal}>Accept</button>
				<button onClick={props.eventCloseModal}>Decline</button>
			</div>
		</div>
	);
}
