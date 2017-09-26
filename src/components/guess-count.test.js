import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Should render the count with the value from count', () => {
    const testCount = 4;
    const wrapper = mount(<GuessCount count={testCount}/>);
    wrapper.find('#count').node.value = testCount;
  })
})
