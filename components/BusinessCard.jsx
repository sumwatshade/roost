import React from 'react';

import {BusinessInfoType} from '../test-data/data-types';
import {Card, Box, Typography, Button, withStyles, Collapse} from '@material-ui/core';
import {useState} from 'react';
import WebsiteLink from './WebsiteLink';

const ShowMoreButton = withStyles(({spacing}) => ({
  root: {
    width: '80%',
    marginTop: spacing(2),
    marginBottom: spacing(2),
  },
}))(Button);

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

const BusinessCard = ({businessInfo}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonText = isExpanded ? 'Show less...' : 'Show more...';


  return (
    <Box component={Card} m={3} p={1}
      variant="outlined"
      justifyContent="space-evenly"
      alignItems="center"
      display="flex"
      minHeight="200px"
      flexDirection="column">
      <CardSummary businessInfo={businessInfo} />
      <CardDetail expanded={isExpanded} businessInfo={businessInfo}/>
      <ShowMoreButton
        color="primary"
        variant="contained"
        onClick={() => setIsExpanded(!isExpanded)}>{buttonText}</ShowMoreButton>
    </Box>
  );
};

BusinessCard.propTypes = {
  businessInfo: BusinessInfoType,
};

export default BusinessCard;
