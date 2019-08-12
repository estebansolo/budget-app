import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ dispatch, history, match, expense }) => (
	<div>
		<h1>Edit Expense {match.params.id}</h1>
		<ExpenseForm
			expense={expense}
			onSubmit={newExpense => {
				console.log(newExpense);
				dispatch(editExpense(expense.id, newExpense));
				history.push('/');
			}}
		/>
		<button
			onClick={() => {
				dispatch(removeExpense({ id: expense.id }));
				history.push('/');
			}}
		>
			Remove
		</button>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(expense => expense.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditExpensePage);
