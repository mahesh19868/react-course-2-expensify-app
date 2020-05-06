import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render Expenses Summary with 1 expenses',() => {
    const wrapper = shallow(<ExpensesSummary expenseTotal={235} expenseCount={1} />);
    expect(wrapper).toMatchSnapshot();
})


test('should render Expenses Summary with multiple expenses',() => {
    const wrapper = shallow(<ExpensesSummary expenseTotal={2350} expenseCount={23} />);
    expect(wrapper).toMatchSnapshot();
})