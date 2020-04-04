import React from 'react';
import {render, fireEvent} from '@testing-library/react';

jest.mock('../../utils/analytics', () => ({
  logEvent: jest.fn(),
  CATEGORY: {
    LINK_CLICKED: 'test',
  },
}));

import analytics from '../../utils/analytics';

import WebsiteLink from '../../components/WebsiteLink';

describe('WebsiteLink Component', () => {
  test('renders in default state', () => {
    const {asFragment} = render(<WebsiteLink />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('logs link clicks', () => {
    const {asFragment, getByText} = render(<WebsiteLink label="click this" />);

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText(/click this/));
  });

  test('renders in default state', () => {
    const {asFragment} = render(<WebsiteLink color="secondary"/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
