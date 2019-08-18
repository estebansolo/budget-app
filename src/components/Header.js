import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
	<header>
		<h1>Budget App</h1>
		<NavLink exact activeClassName="is-active" to="/">
			Dashboard
		</NavLink>
		<NavLink activeClassName="is-active" to="/create">
			Create Expense
		</NavLink>
		<NavLink activeClassName="is-active" to="/help">
			Help
		</NavLink>
	</header>
);
