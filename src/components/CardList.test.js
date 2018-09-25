import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('should render Card component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net'
    },
  ]
  expect(shallow(<CardList data={mockRobots}/>)).toMatchSnapshot()
});
