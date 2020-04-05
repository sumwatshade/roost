import React from 'react';

import {BusinessInfoType} from '../test-data/data-types';
import {Card, Box, Typography, Button, withStyles, Collapse} from '@material-ui/core';
import {useState} from 'react';

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
      <Typography>Tags: {tags.join(', ')}</Typography>
    </Box>
  );
};

const CardSummary = ({businessInfo}) => {
  const {name, website} = businessInfo;

  return (
    <>
      <Typography variant="h4">{name}</Typography>
      <Typography>{website}</Typography>
    </>
  );
};

const BusinessCard = ({businessInfo}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonText = isExpanded ? 'Show less...' : 'Show more...';


  return (
    <Box component={Card} m={3} p={1}
      variant="outlined"
      justifyContent="center"
      alignItems="center"
      display="flex"
      maxWidth="300px"
      flexDirection="column">
      <CardSummary businessInfo={businessInfo} />
      <CardDetail expanded={isExpanded} businessInfo={businessInfo}/>
      <ShowMoreButton
        mt={2}
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
