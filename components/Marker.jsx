import React, {useState} from 'react';
import {motion} from 'framer-motion';
import BusinessIcon from './BusinessIcon';
import WebsiteLink from './WebsiteLink';
import {Paper, Typography} from '@material-ui/core';
const Marker = ({name, iconType, website, color, lat, lng}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Paper component={motion.div}
      layoutTransition
      style={{
        minWidth: '30px',
        minHeight: '10px',
        border: '1px solid #F5F5F6',
        borderRadius: '3px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      lat={lat}
      lng={lng}
      onClick={() => setClicked(!clicked)}>

      <BusinessIcon iconType={iconType}></BusinessIcon>

      {
        clicked ? <Paper
          layoutTransition
          style={nameAndWebsiteStyle}
          lat={lat + 10}
          lng={lng + 30}>
          <Typography variant="body2">{name}</Typography>
        </Paper>:
        ''
      }

      {
        clicked && website ?
          <Paper
            layoutTransition
            style={nameAndWebsiteStyle}
            lat={lat + 20}
            lng={lng + 30}>
            <WebsiteLink href={website} label="Website" color="secondary" />
          </Paper>:
          ''
      }
    </Paper>
  );
};

const nameAndWebsiteStyle = {
  minWidth: '125px',
  minHeight: '10px',
  border: '1px solid #F5F5F6',
  borderRadius: '3px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

Marker.defaultProps = {
  name: '',
  color: '#4cb5ab',
  website: '',
};

export default Marker;
