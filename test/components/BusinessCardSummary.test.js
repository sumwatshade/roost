import React from 'react';
import {render} from '@testing-library/react';

import BusinessCardSummary from '../../components/BusinessCardSummary';

describe('BusinessCardSummary Component', () => {
  let businessInfo;

  beforeEach(() => {
    businessInfo = {
      name: 'Heartwork',
      website: 'https://heartwork.com',
      tags: ['coffee', 'test'],
    };
  });
  test('renders in default state', () => {
    const {asFragment} = render(<BusinessCardSummary
      businessInfo={businessInfo}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('handles empty website gracefully', () => {
    delete businessInfo.website;

    const {asFragment} = render(<BusinessCardSummary
      businessInfo={businessInfo}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
