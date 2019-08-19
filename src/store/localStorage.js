import uuid from 'uuid';

// Authentication
export const setAuth = uid => localStorage.setItem('budgetAuth', uid);

export const removeAuth = () => localStorage.removeItem('budgetAuth');

// Expenses
const setExpenses = expenses => {
	localStorage.setItem('budgetExpenses', JSON.stringify(expenses));
};

export const getLocalExpenses = () => {
	const localExpenses = localStorage.getItem('budgetExpenses') || '[]';
	return JSON.parse(localExpenses);
};

export const addLocalExpense = expense => {
	let localExpenses = getLocalExpenses();
	const newExpense = { id: uuid(), ...expense };

	localExpenses.push(newExpense);
	setExpenses(localExpenses);
	return newExpense;
};

export const removeLocalExpense = id => {
	let localExpenses = getLocalExpenses();
	setExpenses(localExpenses.filter(expense => expense.id !== id));
};

export const editLocalExpense = (id, updates) => {
	let localExpenses = getLocalExpenses();
	setExpenses(
		localExpenses.map(expense => {
			return expense.id === id ? { ...expense, ...updates } : expense;
		})
	);
};
