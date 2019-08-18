import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ExpenseDashboardPage } from '../pages/ExpenseDashboardPage';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import LoginPage from '../pages/LoginPage';
import { HelpPage } from '../pages/HelpPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute exact path="/" component={LoginPage}  />
				<PrivateRoute exact path="/dashboard" component={ExpenseDashboardPage} />
				<PrivateRoute exact path="/create" component={AddExpensePage} />
				<PrivateRoute exact path="/edit/:id" component={EditExpensePage} />
				<Route exact path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
