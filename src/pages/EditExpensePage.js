import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
	<div>
		<h1>Edit Expense</h1>
		<ExpenseForm
			expense={props.expense}
			onSubmit={(newExpense) => {
				props.editExpense(props.expense.id, newExpense);
				props.history.push('/');
			}}
		/>
		<button
			onClick={() => {
				props.removeExpense({ id: props.expense.id });
				props.history.push('/');
			}}
		>
			Remove
		</button>
	</div>
);

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		editExpense: (id, expense) => dispatch(editExpense(id, expense)),
		removeExpense: (data) => dispatch(removeExpense(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
