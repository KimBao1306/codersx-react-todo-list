import React from 'react';
import {v4 as uuidv4} from 'uuid';

import './TodoList.css';

import Modal from '../modal_todo/Modal';
import EmptyList from './empty.svg';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem: '',
			openModal: false,
			itemsList: [
				{id: uuidv4(), title: 'Learning English 1', isComplete: false},
				{id: uuidv4(), title: 'Learning English 2', isComplete: false},
				{id: uuidv4(), title: 'Learning English 3', isComplete: false},
				{id: uuidv4(), title: 'Learning English 4', isComplete: false},
				{id: uuidv4(), title: 'Learning English 5', isComplete: true},
				{id: uuidv4(), title: 'Learning English 1', isComplete: false},
				{id: uuidv4(), title: 'Learning English 2', isComplete: false},
				{id: uuidv4(), title: 'Learning English 3', isComplete: false},
				{id: uuidv4(), title: 'Learning English 4', isComplete: false},
				{id: uuidv4(), title: 'Learning English 5', isComplete: true},
				{id: uuidv4(), title: 'Learning English 1', isComplete: false},
				{id: uuidv4(), title: 'Learning English 2', isComplete: false},
				{id: uuidv4(), title: 'Learning English 3', isComplete: false},
				{id: uuidv4(), title: 'Learning English 4', isComplete: false},
				{id: uuidv4(), title: 'Learning English 5', isComplete: true},
				{id: uuidv4(), title: 'Learning English 1', isComplete: false},
				{id: uuidv4(), title: 'Learning English 2', isComplete: false},
				{id: uuidv4(), title: 'Learning English 3', isComplete: false},
				{id: uuidv4(), title: 'Learning English 4', isComplete: false},
				{id: uuidv4(), title: 'Learning English 5', isComplete: true},
				{id: uuidv4(), title: 'Learning English 1', isComplete: false},
				{id: uuidv4(), title: 'Learning English 2', isComplete: false},
				{id: uuidv4(), title: 'Learning English 3', isComplete: false},
				{id: uuidv4(), title: 'Learning English 4', isComplete: false},
				{id: uuidv4(), title: 'Learning English 5', isComplete: true},
				{id: uuidv4(), title: 'Learning English 1', isComplete: false},
				{id: uuidv4(), title: 'Learning English 2', isComplete: false},
				{id: uuidv4(), title: 'Learning English 3', isComplete: false},
				{id: uuidv4(), title: 'Learning English 4', isComplete: false},
				{id: uuidv4(), title: 'Learning English 5', isComplete: true},
			],
		};
	}

	//add new item
	addItem = (event) => {
		const {newItem, itemsList} = this.state;

		if (!newItem) return;
		if (!newItem.trim()) return;

		if (event.keyCode === 13 || event.target.className === 'add-btn') {
			this.setState({
				itemsList: [
					{id: uuidv4(), title: newItem, isComplete: false},
					...itemsList,
				],
				newItem: '',
				openModal: false,
			});
		}
	};

	//event change
	getValueItem = (event) => {
		this.setState({
			newItem: event.target.value,
		});
	};

	//event toggle item
	toggleItem = (item) => {
		const {itemsList} = this.state;
		this.setState({
			itemsList: itemsList.map((i) =>
				i.id === item.id ? {...item, isComplete: !item.isComplete} : {...i}
			),
		});
	};

	//event for modal to add item
	openModal = () => {
		this.setState({
			openModal: true,
		});
	};

	closeModal = (event) => {
		if (event.target.className === 'container') {
			this.setState({
				openModal: false,
			});
		}
	};

	//get item by status (upcoming || finished)
	getItemsByStatus(status) {
		const {itemsList} = this.state;
		return itemsList.filter((item) => item.isComplete === status);
	}

	render() {
		const {openModal, itemsList} = this.state;
		const itemsComing = this.getItemsByStatus(false);
		const itemsFinished = this.getItemsByStatus(true);
		return (
			<div className="todo-list">
				<div className="todo-title">DAILIST</div>

				{itemsList.length > 0 && (
					<UpComingSection
						itemsComing={itemsComing}
						eventToggleItem={this.toggleItem}
					/>
				)}

				{!!itemsList.length > 0 && (
					<FinishedSection
						itemsFinished={itemsFinished}
						eventToggleItem={this.toggleItem}
					/>
				)}

				{!itemsList.length && (
					<div style={{textAlign: 'center'}}>
						<img style={{width: '60%', objectFit: 'cover'}} src={EmptyList} />
					</div>
				)}

				<div className="todo-add" onClick={this.openModal}>
					<button>+</button>
				</div>

				{openModal && (
					<Modal
						eventCloseModal={this.closeModal}
						eventAddItem={this.addItem}
						eventGetValueItem={this.getValueItem}
					/>
				)}
			</div>
		);
	}
}

function UpComingSection(props) {
	const {eventToggleItem, itemsComing} = props;
	return (
		<div className="section-todo todo-up-coming">
			<div className="section-title">Upcoming</div>
			{itemsComing.map((item) => (
				<Item item={item} key={item.id} eventToggleItem={eventToggleItem} />
			))}
		</div>
	);
}

function FinishedSection(props) {
	const {eventToggleItem, itemsFinished} = props;
	return (
		<div className="section-todo todo-finished">
			<div className="section-title">Finished</div>
			{itemsFinished.map((item) => (
				<Item item={item} key={item.id} eventToggleItem={eventToggleItem} />
			))}
		</div>
	);
}

function Item(props) {
	const {item, eventToggleItem} = props;
	return (
		<div className="section-item" onClick={() => eventToggleItem(item)}>
			<span>{item.title}</span>
		</div>
	);
}
