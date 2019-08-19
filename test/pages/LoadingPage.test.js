import React from 'react';
import { shallow } from 'enzyme';
import LoaderPage from '../../src/pages/LoadingPage';

test('should render LoadingPage correctly', () => {
	const wrapper = shallow(<LoadingPage />);
	expect(wrapper).toMatchSnapshot();
});
