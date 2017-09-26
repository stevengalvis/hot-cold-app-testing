import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game/>);
  });

  it('Should start with an empty array of guesses', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('guesses')).toEqual([]);
  });
})
