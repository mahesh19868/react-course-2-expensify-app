import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test('should render Header correctly', () => {
    //THe below 3 lines use the module React-test-renderer for testing the rendered components

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();    

    //THe below 3 lines gives us the basic idea of how to use enzyme for testing components

    //const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();


})

