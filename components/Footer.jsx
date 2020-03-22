import React from 'react';
import WebsiteLink from './WebsiteLink';
import {Typography} from '@material-ui/core';

const Footer = () => {
  return (
    <footer>
      <Typography>
        Questions? Business Request? Send us a message at&nbsp;
        <WebsiteLink
          href="mailto:roost.sb@gmail.com"
          color="primary"
          label="roost.sb@gmail.com" />
      </Typography>
      <Typography>
        Click&nbsp;
        <WebsiteLink
          href="https://covid19responsefund.org/"
          color="primary"
          label="here" />
        &nbsp;to donate to the WHO COVID-19 Response fund!
      </Typography>
      <style jsx>{`
        footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
