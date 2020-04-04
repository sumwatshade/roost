import React from 'react';
import {render} from '@testing-library/react';

import Logo from '../../components/Logo';

describe('Logo Component', () => {
  test('renders with size=200px in default state', () => {
    const {asFragment} = render(<Logo />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with size=300px when size is overridden', () => {
    const {asFragment} = render(<Logo size="300px" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
