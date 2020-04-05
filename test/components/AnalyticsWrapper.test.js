import React from 'react';

jest.mock('../../utils/analytics', () => ({
  initGA: jest.fn(),
  logPageView: jest.fn(),
}));

import analytics from '../../utils/analytics';

import {render} from '@testing-library/react';

import AnalyticsWrapper from '../../components/AnalyticsWrapper';

describe('Analytics Wrapper Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('initializes analytics and logs page view', () => {
    const {asFragment} = render(<AnalyticsWrapper>Test</AnalyticsWrapper>);

    expect(asFragment()).toMatchSnapshot();
    expect(analytics.initGA).toHaveBeenCalledTimes(1);
    expect(analytics.logPageView).toHaveBeenCalledTimes(1);
  });

  test('only logs page view if analytics already defined', () => {
    window.GA_INITIALIZED = true;
    const {asFragment} = render(<AnalyticsWrapper>Test</AnalyticsWrapper>);

    expect(asFragment()).toMatchSnapshot();
    expect(analytics.initGA).toHaveBeenCalledTimes(0);
    expect(analytics.logPageView).toHaveBeenCalledTimes(1);
  });
});
