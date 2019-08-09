import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT_FILTER
const setTextFilter = (text) => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
});

// Expenses Reducer
const expensesReducerDefaultState = [];
const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expense ];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return { ...expense, ...action.updates };
				}
				return expense;
			});
		default:
			return state;
	}
};

const filterReducer = (state = filterReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		default:
			return state;
	}
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	});
};

// Store Creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filterReducer
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({
		description: 'Services',
		amount: 100000,
		createdAt: 250
	})
);

const expenseTwo = store.dispatch(
	addExpense({
		description: 'Rent',
		amount: 500000,
		createdAt: 100
	})
);

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 250000 }));
store.dispatch(setTextFilter('Rent'));
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setStartDate(5));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(150));

const demoState = {
	expenses: [
		{
			id: 'asdasdasd',
			description: 'Rent',
			note: 'This was the final payment for the address',
			amount: 500000,
			createdAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined
	}
};

/*
const user = {
	name: 'Esteban',
	age: 25
};

console.log({
	...user,
	location: 'Armenia',
	name: 'Daniela'
});

console.log(user);
*/