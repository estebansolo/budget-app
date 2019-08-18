import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import configureStore from './store/configureStore';
import './firebase/firebase'
import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { startSetExpenses } from './actions/expenses'

const store = configureStore();

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'))


store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<AppRouter />
		</Provider>,
		document.getElementById('app')
	);
})

