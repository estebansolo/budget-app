import React from 'react';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import ExpenseForm from '../../src/components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});

	expect(wrapper.contains(<p className="form__error">Please provide description and amount</p>)).toEqual(true);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New Description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(0)
		.simulate('change', {
			target: { value }
		});

	expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
	const value = 'New note value';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: { value }
	});

	expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input', () => {
	const value = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(1)
		.simulate('change', {
			target: { value }
		});

	expect(wrapper).toMatchSnapshot();
});

test('should set amount if invalid input', () => {
	const value = '12.122';
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(1)
		.simulate('change', {
			target: { value }
		});

	expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});

	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		createdAt: expenses[0].createdAt,
		note: expenses[0].note
	});
});
