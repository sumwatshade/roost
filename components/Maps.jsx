import React, {useState} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import WebsiteLink from './WebsiteLink';
// TODO: replace with API call?
import places from '../test-data/places';
import {Typography, MuiThemeProvider, useTheme} from '@material-ui/core';
import BusinessIcon from './BusinessIcon';

const Maps = ({zoom, google}) => {
  const theme = useTheme();
  let sumLat = 0; let sumLng = 0;

  const [activeMarker, setActiveMarker] = useState(null);
  const [markerDetails, setMarkerDetails] = useState({});


  const onMapClicked = () => {
    setActiveMarker(null);
  };


  const Markers = places.map((props) => {
    console.log(props);
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
    <div className="maps-container">
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
            <BusinessIcon
              style={{alignSelf: 'center'}}
              iconType={markerDetails.iconType} />
            <Typography>{markerDetails.name}</Typography>
            <WebsiteLink
              href={markerDetails.website}
              label={markerDetails.website}
              color='primary'/>
          </MuiThemeProvider>
        </InfoWindow>
      </Map>
      <style jsx>{`
        .maps-container {
          margin: 10px 0;
          height: 500px;
          width: 90vw;      
          box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
            0px 1px 1px 0px rgba(0,0,0,0.14), 
            0px 1px 3px 0px rgba(0,0,0,0.12);
          border-radius: 4px;    
        }
      `}</style>
    </div>

  );
};

Maps.defaultProps = {
  zoom: 11,
};

// eslint-disable-next-line new-cap
export default GoogleApiWrapper({
  apiKey: process.env.MAPS_API_KEY,
})(Maps);
