import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalConvenienceStoreIcon
  from '@mui/icons-material/LocalConvenienceStore';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PinDropIcon from '@mui/icons-material/PinDrop';
import React from 'react';
import StoreIcon from '@mui/icons-material/Store';

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
