import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './components/AppRouter';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
	addExpense({
		description: 'Water Bill'
	})
);

store.dispatch(
	addExpense({
		description: 'Gas Bill',
		amount: 404
	})
);

store.dispatch(
	addExpense({
		description: 'Rent',
		amount: 600000,
		createdAt: 1000
	})
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById('app')
);
