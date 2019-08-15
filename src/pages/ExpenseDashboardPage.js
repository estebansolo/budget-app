import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

export const ExpenseDashboardPage = () => (
	<div>
		<ExpensesSummary />
		<ExpenseListFilters />
		<ExpenseList />
	</div>
);
