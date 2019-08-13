import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', { note: 'New note value' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'New note value'
		}
	});
});

test('should setup ad expense action object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 109500,
		createdAt: 1000,
		note: 'This was last month date'
	};

	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('should setup ad expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			description: '',
			amount: 0,
			createdAt: 0,
			note: '',
			id: expect.any(String)
		}
	});
});
