
import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    const testGuesses = [2, 3 , 5 ,6];
    shallow(<GuessList guesses={testGuesses}  />);


  });

  
})
