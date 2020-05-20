import React from 'react';

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

		if (event.keyCode === 13 || event.target.className === 'icon-search') {
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
		const {bookList, searchValue} = this.state;
		return (
			<div className="todo-list">
				<div className="todo-title">BOOKLIST</div>
				<div className="todo-search">
					<input
						type="text"
						placeholder="Search"
						name="search"
						onChange={this.getSearchValue}
						onKeyUp={this.searchBooks}
						value={searchValue}
					/>
					<span href="###" className="icon" onClick={this.searchBooks}>
						<img
							src="https://cdn.glitch.com/5a485163-f15e-4c37-9e92-41225e59abeb%2Fsearch.png?v=1589389555222"
							alt="search icon"
							className="icon-search"
						/>
					</span>
				</div>
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
