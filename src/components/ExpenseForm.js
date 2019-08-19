import React, { useState } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

const ExpenseForm = ({ onSubmit, expense }) => {
	const [description, setDescription] = useState(expense ? expense.description : '');
	const [amount, setAmount] = useState(expense ? (expense.amount / 100).toString() : '');
	const [note, setNote] = useState(expense ? expense.note : '');
	const [createdAt, setCreatedAt] = useState(expense ? moment(expense.createdAt) : moment());
	const [calendarFocused, setCalendarFocused] = useState(false);
	const [error, setError] = useState('');

	return (
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault();
				if (!description || !amount) {
					setError('Please provide description and amount');
				} else {
					setError('');
					onSubmit({
						description,
						amount: parseFloat(amount, 10) * 100,
						createdAt: createdAt.valueOf(),
						note
					});
				}
			}}
		>
			{error && <p className="form__error">{error}</p>}
			<input
				type="text"
				placeholder="Description"
				autoFocus
				value={description}
				className="text-input"
				onChange={e => {
					setDescription(e.target.value);
				}}
			/>
			<input
				type="text"
				placeholder="Amount"
				value={amount}
				className="text-input"
				onChange={e => {
					const amount = e.target.value;
					if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
						setAmount(amount);
					}
				}}
			/>
			<SingleDatePicker
				date={createdAt}
				onDateChange={newCreatedAt => {
					if (newCreatedAt) {
						setCreatedAt(newCreatedAt);
					}
				}}
				focused={calendarFocused}
				numberOfMonths={1}
				onFocusChange={({ focused }) => {
					setCalendarFocused(focused);
				}}
				isOutsideRange={() => false}
			/>
			<textarea
				value={note}
				className="textarea"
				placeholder="Add a note for your expense"
				onChange={e => {
					setNote(e.target.value);
				}}
			/>
			<div>
				<button className="button">Save Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
