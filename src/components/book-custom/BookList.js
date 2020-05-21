import React from 'react';

import 'antd/dist/antd.css';
import {Input, Row, Col} from 'antd';

import './BookList.css';

import EmptyList from './empty.svg';

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bookList: [],
			searchValue: '',
		};
	}

	searchBooks = (event) => {
		const {searchValue} = this.state;

		if (event.keyCode === 13) {
			fetch(`https://b29-2.glitch.me/api/books/search?search=${searchValue}`)
				.then((res) => res.json())
				.then((data) => this.setState({bookList: data.books, searchValue: ''}));
		}
	};

	getSearchValue = (event) => {
		this.setState({
			searchValue: event.target.value,
		});
	};

	componentDidMount() {
		fetch('https://b29-2.glitch.me/api/books')
			.then((res) => res.json())
			.then((data) => this.setState({bookList: data.books}));
	}

	render() {
		const {bookList, loading} = this.state;

		return (
			<div className="todo-list">
				<div className="todo-title">BOOKLIST</div>
				<>
					<Row justify="end" style={{marginBottom: '20px'}}>
						<Col span={6}>
							<Input
								placeholder="Search"
								name="seach"
								onChange={this.getSearchValue}
								onKeyUp={this.searchBooks}
							/>
						</Col>
					</Row>
				</>
				<div className="todo-content">
					{bookList.length > 0 &&
						bookList.map((book) => <Item {...book} key={book._id} />)}

					{!bookList.length && (
						<div style={{textAlign: 'center'}}>
							<img
								style={{width: '60%', objectFit: 'cover'}}
								src={EmptyList}
								alt="empty booklist"
							/>
						</div>
					)}
				</div>
			</div>
		);
	}
}

function Item(props) {
	const {title} = props;
	return (
		<div className="section-todo">
			<div className="section-item">
				<span>{title}</span>
			</div>
		</div>
	);
}
