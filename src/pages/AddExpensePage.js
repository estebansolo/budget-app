import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = props => {
	const addExpense = expense => {
		props.startAddExpense(expense);
		props.history.push('/');
	};

	return (
		<div>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Add Expense</h1>
				</div>
			</div>
			<div className="content-container">
				<ExpenseForm onSubmit={addExpense} />
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
