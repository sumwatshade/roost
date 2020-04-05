import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import BusinessCard from '../../components/BusinessCard';

describe('BusinessCard Component', () => {
  let businessInfo;

  beforeEach(() => {
    businessInfo = {
      name: 'Heartwork',
      website: 'https://heartwork.com',
      tags: ['coffee', 'test'],
    };
  });
  test('renders in default state', () => {
    const {asFragment} = render(<BusinessCard businessInfo={businessInfo}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('click to expand', () => {
    const {asFragment, getByText} = render(<BusinessCard businessInfo={businessInfo} />);

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText(/Show more\.\.\./));
    expect(asFragment()).toMatchSnapshot();
  });
});
