import React from 'react';
import {bool} from 'prop-types';
import {BusinessInfoType} from '../test-data/data-types';
import {Box, Typography, Collapse} from '@material-ui/core';

const CardDetail = ({businessInfo, expanded}) => {
  const {tags} = businessInfo;
  return (
    <Box component={Collapse} in={expanded} m={1}>
      {tags ? (
                <Typography>Tags: {tags.join(', ')}</Typography>
            ) : 'No details yet...'}
    </Box>
  );
};

CardDetail.propTypes = {
  businessInfo: BusinessInfoType.isRequired,
  expanded: bool.isRequired,
};

export default CardDetail;
