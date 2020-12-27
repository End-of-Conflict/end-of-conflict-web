import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import Nav from './Nav';
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => ({
    url: '/en/0',
    params: { chapter: 0 }
  }),
}));
configure({ adapter: new Adapter() });

describe('Renders', () => {
  test('Nav', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
  });
});
