import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../src/pages/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			history={history}
			expense={expenses[2]}
		/>
	);
});

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle onClick', () => {
	wrapper.find('button').prop('onClick')(expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith('/');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
