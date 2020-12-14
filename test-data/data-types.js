import {shape, string, number, array} from 'prop-types';

export const BusinessInfoType = shape({
  name: string.isRequired,
  iconType: string,
  venmo: string,
  website: string,
  lat: number,
  lng: number,
  tags: array,
});
