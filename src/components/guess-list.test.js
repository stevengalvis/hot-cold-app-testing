
import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    const testGuesses = [2, 3 , 5 ,6];
    shallow(<GuessList guesses={testGuesses}  />);


  });

  it('should render the guesses', () => {
    const testGuesses = [2, 3 , 5 ,6];
    const wrapper = mount(<GuessList guesses={testGuesses} />);
    expect(wrapper.find('ul').children()).to.have.length(testGuesses.length);
  });
})
