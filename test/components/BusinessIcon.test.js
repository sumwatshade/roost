import React from 'react';
import {render} from '@testing-library/react';

import BusinessIcon from '../../components/BusinessIcon';

describe('BusinessIcon Component', () => {
  test('renders PinDropIcon in default state', () => {
    const {asFragment} = render(<BusinessIcon />);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders FastFoodIcon', () => {
    const {asFragment} = render(<BusinessIcon iconType="FastFoodIcon"/>);

    expect(asFragment()).toMatchSnapshot();
  });
  test('renders LocalBarIcon', () => {
    const {asFragment} = render(<BusinessIcon iconType="LocalBarIcon"/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders LocalCafeIcon', () => {
    const {asFragment} = render(<BusinessIcon iconType="LocalCafeIcon"/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders LocalConvenienceStoreIcon', () => {
    const {asFragment} = render(<BusinessIcon iconType="LocalConvenienceStoreIcon"/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders LocalDiningIcon', () => {
    const {asFragment} = render(<BusinessIcon iconType="LocalDiningIcon"/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders StoreIcon', () => {
    const {asFragment} = render(<BusinessIcon iconType="StoreIcon"/>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders default icon if the defined icon is not available', () => {
    const {asFragment} = render(<BusinessIcon iconType="NotAnIcon"/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
