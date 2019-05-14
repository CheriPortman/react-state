import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

describe('App componenet', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
