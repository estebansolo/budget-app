import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';

export const ExpenseDashboardPage = () => (
	<div>
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);
