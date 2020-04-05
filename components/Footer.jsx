import React from 'react';
import WebsiteLink from './WebsiteLink';
import {Box, withStyles} from '@material-ui/core';
import CenteredTypography from './CenteredTypography';
import Logo from './Logo';

const StyledBox = withStyles(({palette}) => ({
  root: {
    borderTop: `1px solid ${palette.primary.main}`,
  },
}))(Box);

const Footer = () => {
  return (
    <StyledBox my={3} p={3} component='footer'>
      <CenteredTypography>
        Questions? Business Request? Send us a message at&nbsp;
        <WebsiteLink
          href="mailto:roost.sb@gmail.com"
          color="primary"
          label="roost.sb@gmail.com" />
      </CenteredTypography>
      <CenteredTypography>
        Click&nbsp;
        <WebsiteLink
          href="https://covid19responsefund.org/"
          color="primary"
          label="here" />
        &nbsp;to donate to the WHO COVID-19 Response fund!
      </CenteredTypography>

      <br />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Logo size="40px" />
      </div>
    </StyledBox>

  );
};

export default Footer;
