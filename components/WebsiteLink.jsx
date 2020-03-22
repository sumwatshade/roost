import React from 'react';
import {Link} from '@material-ui/core';
import {logEvent, CATEGORY} from '../utils/analytics';

const WebsiteLink = ({href, label, color}) => (
  <Link href={href}
    target="_blank"
    color={color}
    rel="noopener noreferrer"
    onClick={() => {
      logEvent(CATEGORY.LINK_CLICKED, href);
    }}>{label}</Link>
);

WebsiteLink.defaultProps = {
  href: '',
  label: '',
  color: 'secondary',
};

export default WebsiteLink;
