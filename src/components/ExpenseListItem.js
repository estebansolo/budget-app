import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => {
	return (
		<div>
			<Link to={`/edit/${id}`}>
				<h3>{description}</h3>
			</Link>
			<p>
				{numeral(amount / 100).format('$0,0.00')}
				-
				{moment(createdAt).format('MMMM Do, YYYY')}
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
