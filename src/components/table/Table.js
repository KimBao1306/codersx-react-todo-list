import React from 'react';
import './Table.css';

function Table(props) {
	return (
		<table className="table">
			<thead>
				<tr className="table-header">
					<th>#</th>
					<th>First</th>
					<th>Last</th>
					<th>Handle</th>
				</tr>
			</thead>
			<tbody>
				{props.users.map((u, i) => (
					<TableRow user={u} id={i} />
				))}
			</tbody>
		</table>
	);
}

function TableRow(props) {
	const {first, last, handle} = props.user;
	const {id} = props;
	const className = id % 2 === 0 ? 'table-content is-even' : 'table-content';
	return (
		<tr className={className}>
			<td>{id + 1}</td>
			<td>{first}</td>
			<td>{last}</td>
			<td>{handle}</td>
		</tr>
	);
}

export default Table;
