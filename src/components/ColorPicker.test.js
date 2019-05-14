import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker.js';

describe('ColorPicker component', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});