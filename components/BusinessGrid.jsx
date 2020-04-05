import React from 'react';
import PropTypes from 'prop-types';
import {BusinessInfoType} from '../test-data/data-types';
import {Grid} from '@material-ui/core';
import BusinessCard from './BusinessCard';

const BusinessGrid = ({places}) => {
  return (
    <Grid container spacing={1}>
      {places.map((businessInfo, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <BusinessCard businessInfo={businessInfo} />
        </Grid>
      ))}
    </Grid>
  );
};

BusinessGrid.propTypes = {
  places: PropTypes.arrayOf(BusinessInfoType),
};

export default BusinessGrid;
