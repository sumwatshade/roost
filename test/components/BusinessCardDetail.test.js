import React from 'react';
import {render} from '@testing-library/react';

import BusinessCardDetail from '../../components/BusinessCardDetail';

describe('BusinessCardDetail Component', () => {
  let businessInfo;

  beforeEach(() => {
    businessInfo = {
      name: 'Heartwork',
      website: 'https://heartwork.com',
      tags: ['coffee', 'test'],
    };
  });
  test('renders in default collapsed state', () => {
    const {asFragment} = render(<BusinessCardDetail
      businessInfo={businessInfo}
      expanded={false}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('handles empty tags gracefully', () => {
    delete businessInfo.tags;

    const {asFragment} = render(<BusinessCardDetail
      businessInfo={businessInfo}
      expanded={false}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
