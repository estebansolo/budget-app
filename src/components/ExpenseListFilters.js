import React, { useState } from 'react';
import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../actions/filters';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export const ExpenseListFilters = props => {
	const [calendarFocused, setCalendarFocused] = useState(null);

	const onTextChange = e => {
		props.setTextFilter(e.target.value);
	};

	const onSortChange = e => {
		if (e.target.value === 'date') {
			props.sortByDate();
		} else {
			props.sortByAmount();
		}
	};

	const onDateChanges = ({ startDate, endDate }) => {
		props.setStartDate(startDate);
		props.setEndDate(endDate);
	};

	const onFocusChange = focused => {
		setCalendarFocused(focused);
	};

	return (
		<div className="content-container">
			<div className="input-group">
				<div className="input-group__item">
					<input
						type="text"
						value={props.filters.text}
						onChange={onTextChange}
						className="text-input"
						placeholder="Search Expenses"
					/>
				</div>
				<div className="input-group__item">
					<select onChange={onSortChange} value={props.filters.sortBy} className="select">
						<option value="date">Date</option>
						<option value="amount">Amount</option>
					</select>
				</div>
				<div className="input-group__item">
					<DateRangePicker
						startDate={props.filters.startDate}
						startDateId=""
						endDateId=""
						endDate={props.filters.endDate}
						onDatesChange={onDateChanges}
						focusedInput={calendarFocused}
						onFocusChange={onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
						showClearDates={false}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	filters: state.filters
});

const mapDispatchToProps = dispatch => ({
	setTextFilter: text => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: startDate => dispatch(setStartDate(startDate)),
	setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
