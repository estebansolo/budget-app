import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../src/components/ExpenseListFilters';
import { altFilters, filters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
		/>
	);
});

test('should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
	wrapper.setProps({ filters: altFilters });
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	const value = 'rent';
	wrapper.find('input').simulate('change', {
		target: {
			value
		}
	});

	expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by amount', () => {
	const value = 'amount';
	wrapper.find('select').simulate('change', {
		target: {
			value
		}
	});

	expect(sortByAmount).toHaveBeenCalled();
});

test('should sort by date', () => {
	wrapper.setProps({ filters: altFilters });
	const value = 'date';
	wrapper.find('select').simulate('change', {
		target: {
			value
		}
	});

	expect(sortByDate).toHaveBeenCalled();
});

test('should handle date changes', () => {
	const startDate = moment(0).add(4, 'years');
	const endDate = moment(0);

	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });

	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
