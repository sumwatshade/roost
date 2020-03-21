import React from 'react';
import {Link} from '@material-ui/core';

const WebsiteLink = ({href, label, color}) => (
  <Link href={href}
    target="_blank"
    color={color}
    rel="noopener noreferrer">{label}</Link>
);

WebsiteLink.defaultProps = {
  href: '',
  label: '',
  color: 'secondary',
};

export default WebsiteLink;
