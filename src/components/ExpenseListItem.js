import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => {
	return (
		<div>
			<Link to={`/edit/${id}`}>
				<h3>{description}</h3>
			</Link>
			<p>
				{amount} - {createdAt}
			</p>
			<button
				onClick={() => {
					dispatch(removeExpense({ id }));
				}}
			>
				Remove
			</button>
		</div>
	);
};

export default connect()(ExpenseListItem);
