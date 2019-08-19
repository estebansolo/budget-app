import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './pages/LoadingPage';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		hasRendered = true;
		ReactDOM.render(
			<Provider store={store}>
				<AppRouter />
			</Provider>,
			document.getElementById('app')
		);
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
	const localAuth = localStorage.getItem('budgetAuth') || '';
	if (user || localAuth === 'Anonymously') {
		const userId = user ? user.uid : localAuth;
		store.dispatch(login(userId));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
