import selectExpensesTotal from '../../src/selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const response = selectExpensesTotal([]);
	expect(response).toBe(0);
});

test('should correctly add up a single expense', () => {
	const response = selectExpensesTotal([expenses[1]]);
	expect(response).toBe(109500);
});

test('should correctly add up multiple expenses', () => {
	const response = selectExpensesTotal(expenses);
	expect(response).toBe(114195);
});
