import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import LocalConvenienceStoreIcon
  from '@material-ui/icons/LocalConvenienceStore';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import PinDropIcon from '@material-ui/icons/PinDrop';
import React from 'react';
import StoreIcon from '@material-ui/icons/Store';

const icons = {
  'FastFoodIcon': FastfoodIcon,
  'LocalBarIcon': LocalBarIcon,
  'LocalCafeIcon': LocalCafeIcon,
  'LocalConvenienceStoreIcon': LocalConvenienceStoreIcon,
  'LocalDiningIcon': LocalDiningIcon,
  '': PinDropIcon,
  'StoreIcon': StoreIcon,
};

const BusinessIcon = ({iconType}) => {
  const Component = icons[iconType] ?
    icons[iconType] :
    icons[BusinessIcon.defaultProps.iconType];
  return <Component />;
};

BusinessIcon.defaultProps = {
  iconType: '',
};

export default BusinessIcon;
