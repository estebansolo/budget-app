import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = props => {
	const editExpense = newExpense => {
		props.startEditExpense(props.expense.id, newExpense);
		props.history.push('/');
	};

	const removeExpense = () => {
		props.startRemoveExpense({ id: props.expense.id });
		props.history.push('/');
	};

	return (
		<div>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Edit Expense</h1>
				</div>
			</div>
			<div className="content-container">
				<ExpenseForm expense={props.expense} onSubmit={editExpense} />
				<button onClick={removeExpense} className="button button--secondary">
					Remove Expense
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
