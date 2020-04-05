import React from 'react';
import {render} from '@testing-library/react';

import Footer from '../../components/Footer';

describe('Footer Component', () => {
  test('renders in default state', () => {
    const {asFragment} = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
