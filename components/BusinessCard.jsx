import React from "react";

import { BusinessInfoType } from "../test-data/data-types";
import { Card, Box, Button, styled } from "@mui/material";
import { useState } from "react";

import BusinessCardDetail from "./BusinessCardDetail";
import BusinessCardSummary from "./BusinessCardSummary";

const ShowMoreButton = styled(Button)(({ theme }) => ({
  root: {
    width: "80%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const BusinessCard = ({ businessInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonText = isExpanded ? "Show less..." : "Show more...";

  return (
    <Box
      component={Card}
      m={3}
      p={1}
      variant="outlined"
      justifyContent="space-evenly"
      alignItems="center"
      display="flex"
      minHeight="200px"
      flexDirection="column"
    >
      <BusinessCardSummary businessInfo={businessInfo} />
      <BusinessCardDetail expanded={isExpanded} businessInfo={businessInfo} />
      <ShowMoreButton
        color="primary"
        variant="contained"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {buttonText}
      </ShowMoreButton>
    </Box>
  );
};

BusinessCard.propTypes = {
  businessInfo: BusinessInfoType.isRequired,
};

export default BusinessCard;
