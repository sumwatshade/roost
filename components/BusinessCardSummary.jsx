import React from 'react';

import {BusinessInfoType} from '../test-data/data-types';
import {Typography} from '@material-ui/core';
import WebsiteLink from './WebsiteLink';

const CardSummary = ({businessInfo}) => {
  const {name, website} = businessInfo;

  return (
    <>
      <Typography variant="h4">{name}</Typography>
      <Typography>
        {website ? (
                    <WebsiteLink
                      href={website}
                      color="primary"
                      label='Website' />
                ) : ''}
      </Typography>
    </>
  );
};

CardSummary.propTypes = {
  businessInfo: BusinessInfoType.isRequired,
};
