import React from 'react';
import { shallow } from 'enzyme';
import { ExportListFilters, ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';


let setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount,wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
    />    
    )
})


test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})


test('should handle text change', () => {
    const value = altFilters.text;
    wrapper.find('input').simulate('change',{
        target:{
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})


test('should sort by date', () => {
    //THis is needed as the sortBy in ExpenseListFilters is by default set to Date
    //The call to setProps will set the sortBy in ExpenseListFilters to amount
    wrapper.setProps({
        filters: altFilters
    });
    const value = filters.sortBy;
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
})

test('should sort by amount', () => {
    const value = altFilters.sortBy;
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
})

test('should handle date changes ', () => {
    const startDate = altFilters.startDate;
    const endDate = altFilters.endDate;
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})


test('should handle data focus changes', () => {
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})