import React from 'react';
import {render} from '@testing-library/react';

import Maps from '../../components/Maps';

describe('Maps Component', () => {
  test('renders in default state', () => {
    const {asFragment} = render(<Maps />);

    expect(asFragment()).toMatchSnapshot();
  });


  test('rerender to change zoom', () => {
    const {asFragment, rerender} = render(<Maps zoom={3}/>);

    expect(asFragment()).toMatchSnapshot();

    rerender(<Maps zoom={4} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
