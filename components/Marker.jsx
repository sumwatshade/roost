import React, {useState} from 'react';
import {motion} from 'framer-motion';
import WebsiteLink from './WebsiteLink';
import {Paper, Typography} from '@material-ui/core';
const Marker = ({name, website, color, lat, lng}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Paper component={motion.div}
      layoutTransition
      style={{
        minWidth: '100px',
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

      <Typography>{name}</Typography>
      {
        clicked && website ?
          <WebsiteLink href={website} label="Website" color="secondary" /> :
          ''
      }
    </Paper>
  );
};

Marker.defaultProps = {
  name: '',
  color: '#4cb5ab',
  website: '',
};

export default Marker;
