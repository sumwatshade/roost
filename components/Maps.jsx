import React, {useState} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import WebsiteLink from './WebsiteLink';
// TODO: replace with API call?
import places from '../test-data/places';
import {Typography, MuiThemeProvider, useTheme, Paper, withStyles} from '@material-ui/core';
import BusinessIcon from './BusinessIcon';

const StyledPaper = withStyles({
  root: {
    height: '500px',
    width: '90vw',
  },
})(Paper);

const Maps = ({zoom, google}) => {
  const theme = useTheme();
  let sumLat = 0; let sumLng = 0;

  const [activeMarker, setActiveMarker] = useState(null);
  const [markerDetails, setMarkerDetails] = useState({});


  const onMapClicked = () => {
    setActiveMarker(null);
  };


  const Markers = places.map((props) => {
    const onMarkerClick = (props, marker) => {
      setActiveMarker(marker);
      setMarkerDetails(props);
    };

    const {lat, lng, name} = props;

    sumLat += parseFloat(lat);
    sumLng += parseFloat(lng);

    return <Marker key={lat + 1000 * lng}
      title={name}
      onClick={onMarkerClick}
      position={{
        lat,
        lng,
      }}
      {...props} />;
  });

  const center = {
    lat: sumLat / places.length,
    lng: sumLng / places.length,
  };

  return (
    <StyledPaper>
      <Map
        google={google}
        onClick={onMapClicked}
        style={{
          height: '500px',
          width: '90vw',
          borderRadius: '4px',
        }}
        initialCenter={center}
        zoom={zoom}>
        {Markers}
        <InfoWindow
          marker={activeMarker}
          visible={typeof activeMarker !== 'null'}>
          <MuiThemeProvider theme={theme}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <BusinessIcon iconType={markerDetails.iconType} />
              <Typography>{markerDetails.name}</Typography>
              <WebsiteLink
                href={markerDetails.website}
                label={markerDetails.website}
                color='primary'/>
            </div>
          </MuiThemeProvider>
        </InfoWindow>
      </Map>
    </StyledPaper>
  );
};

Maps.defaultProps = {
  zoom: 11,
};

// eslint-disable-next-line new-cap
export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY,
})(Maps);
