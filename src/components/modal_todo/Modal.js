import React from 'react';
import './Modal.css';

export default function ModalAddItem(props) {
	const {eventCloseModal, eventAddItem, eventGetValueItem} = props;
	return (
		<div className="container" onClick={eventCloseModal} onKeyUp={eventAddItem}>
			<div className="modal">
				<h3 className="modal-title">Add new item</h3>
				<div className="form-group">
					<input
						type="text"
						name="item"
						placeholder="Add your new to do"
						onChange={eventGetValueItem}
					/>
				</div>
				<div className="form-btn">
					<button className="add-btn" onClick={eventAddItem}>
						Add
					</button>
				</div>
			</div>
		</div>
	);
}
