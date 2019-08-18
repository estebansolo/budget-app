import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './components/AppRouter';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase'
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'

const store = configureStore();

let hasRendered = false
const renderApp = () => {
	if(!hasRendered){
		hasRendered = true
		ReactDOM.render(
			<Provider store={store}>
				<AppRouter />
			</Provider>,
			document.getElementById('app')
		);
	}
}

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		store.dispatch(login(user.uid))
		store.dispatch(startSetExpenses()).then(() => {
			renderApp()
			if(history.location.pathname === '/'){
				history.push('/dashboard')
			}
		})		
	} else {
		store.dispatch(logout())
		renderApp()
		history.push('/')
	}
})