import React from 'react';
import {render} from '@testing-library/react';

import NextMuiLink from '../../components/NextMuiLink';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({pathname: '/test'})),
}));

jest.mock('clsx', () => () => {});

describe('NextMuiLink Component', () => {
  test('renders in default state', () => {
    const {asFragment} = render(<NextMuiLink href="/test"/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders in naked state', () => {
    const {asFragment} = render(<NextMuiLink href="/test" naked={true}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with href object', () => {
    const href = {
      pathname: '/test',
    };
    const {asFragment} = render(<NextMuiLink href={href} naked={true}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
