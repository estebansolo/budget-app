import React, { useState } from 'react';
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../actions/filters';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseListFilters = props => {
	const [calendarFocused, setCalendarFocused] = useState(null);

	return (
		<div>
			<input
				type="text"
				value={props.filters.text}
				onChange={e => {
					props.dispatch(setTextFilter(e.target.value));
				}}
			/>
			<select
				onChange={e => {
					if (e.target.value === 'date') {
						props.dispatch(sortByDate());
					} else {
						props.dispatch(sortByAmount());
					}
				}}
				value={props.filters.sortBy}
			>
				<option value="date">Date</option>
				<option value="amount">Amount</option>
			</select>
			<DateRangePicker
				startDate={props.filters.startDate}
				startDateId=""
				endDateId=""
				endDate={props.filters.endDate}
				onDatesChange={({ startDate, endDate }) => {
					props.dispatch(setStartDate(startDate));
					props.dispatch(setEndDate(endDate));
				}}
				focusedInput={calendarFocused}
				onFocusChange={focused => {
					setCalendarFocused(focused);
				}}
				numberOfMonths={1}
				isOutsideRange={() => false}
				showClearDates={false}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
