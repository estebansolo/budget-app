import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
	<div>
		<h1>Edit Expense</h1>
		<ExpenseForm
			expense={props.expense}
			onSubmit={(newExpense) => {
				props.startEditExpense(props.expense.id, newExpense);
				props.history.push('/');
			}}
		/>
		<button
			onClick={() => {
				props.startRemoveExpense({ id: props.expense.id });
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
		startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
		startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
