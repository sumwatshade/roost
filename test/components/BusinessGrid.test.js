import React from 'react';
import {render} from '@testing-library/react';

import BusinessGrid from '../../components/BusinessGrid';

describe('BusinessGrid Component', () => {
  let places;

  beforeEach(() => {
    places = [{
      name: 'Heartwork',
      website: 'https://heartwork.com',
      tags: ['coffee', 'test'],
    }];
  });
  test('renders in default collapsed state', () => {
    const {asFragment} = render(<BusinessGrid places={places}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
