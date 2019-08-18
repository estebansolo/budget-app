import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
	startSetExpenses,
	startRemoveExpense,
	startAddExpense,
	setExpenses,
	addExpense,
	editExpense,
	removeExpense
} from '../../src/actions/expenses';
import expenses from '../fixtures/expenses'
import database from '../../src/firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
	const expensesData = {}
	expenses.forEach(({ id, description, note, amount, createdAt}) => {
		expensesData[id] = {
			description,
			amount,
			note,
			createdAt
		}
	})

	done()

	//database.ref('expenses').set(expensesData).then(() => done())
})


test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

/*
test('should remove expense from firebase', (done) => {
	const store = createMockStore({})
	const id = expenses[1].id
	store.dispatch(startRemoveExpense({ id })).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "REMOVE_EXPENSE",
			id
		})

		return database.ref(`expenses/${id}`).once('value')
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy()
		done()
	})
});
*/

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

test('should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2]
	});
});

/*
test('should add expense to database and store', (done) => {
	const store = createMockStore({})
	const expenseData = {
		description: 'Mouse',
		amount: 30000,
		createdAt: 1000,
		note: 'This one is better'
	}

	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseData
			}
		})

		return database.ref(`expenses/${actions[0].id}`).once('value')
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData)
		done()
	})
});

test('should add expense with defaults to database and store', (done) => {
	const store = createMockStore({})
	const expenseDefaults = {
		description: '',
		amount: 0,
		createdAt: 0,
		note: ''
	}

	store.dispatch(startAddExpense()).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		})

		return database.ref(`expenses/${actions[0].id}`).once('value')
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseDefaults)
		done()
	})
});
*/

test('should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: undefined
	});
});

test('should setup set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses
	});
});

/*
test('should fetch the expenses from firebase', () => {
	const store = createMockStore({})
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions()
		expect(actions[0]).toEqual({
			type: "SET_EXPENSES",
			expenses
		})

		done()
	})
});
*/