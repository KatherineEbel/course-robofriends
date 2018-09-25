import {shallow} from 'enzyme';
import React from 'react';
import MainPage from '../components/MainPage';

let wrapper, mockProps;

beforeEach(() => {
  mockProps = {
    requestRobots: jest.fn(),
    onMount: jest.fn(),
    robots: [],
    searchValue: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps}/>)
});


it('should render mainPage', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should filter robots correctly', () => {
  // const mockProps = {
  //   requestRobots: jest.fn(),
  //   onMount: jest.fn(),
  //   robots: [{
  //     id: 3,
  //     name: 'John',
  //     email: 'john@gmail.com'
  //   }],
  //   searchValue: 'j',
  //   isPending: false
  // };
  const props = {
    ...mockProps,
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
  };
  wrapper = shallow(<MainPage {...props}/>);
  expect(wrapper.instance().filteredRobots()).toEqual(props.robots);
});