import React, {useState} from 'react';
import {motion} from 'framer-motion';

const Marker = ({name, website, color, lat, lng}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      layoutTransition
      style={{
        minWidth: '100px',
        minHeight: '10px',
        border: '1px solid #F5F5F6',
        borderRadius: '3px',
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
      lat={lat}
      lng={lng}
      onClick={() => setClicked(!clicked)}>

      <div className="name">{name}</div>
      {clicked && website ? <a href={website} target="_blank">Website</a> : '' }
    </motion.div>
  );
};

Marker.defaultProps = {
  name: '',
  color: '#4cb5ab',
  website: '',
};

export default Marker;
