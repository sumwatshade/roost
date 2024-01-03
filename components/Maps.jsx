import React, {useState} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import WebsiteLink from './WebsiteLink';
// TODO: replace with API call?
import places from '../test-data/places';
import {
  Typography,
  ThemeProvider,
  useTheme,
  Paper,

  CircularProgress,
  Box,
  styled,
} from '@mui/material'; import BusinessIcon from './BusinessIcon';

const mapStyles = {
  height: '500px',
  borderRadius: '4px',
};

const StyledPaper = styled(Paper)(() => ({
  root: {
    display: 'flex',
    ...mapStyles,
  },
}));

const LoadingComponent = () => (
  <StyledPaper elevation={3}>
    <Box margin='auto'><CircularProgress size={80} thickness={4}/></Box>
  </StyledPaper>
);

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
    <StyledPaper elevation={3}>
      <Map
        google={google}
        onClick={onMapClicked}
        containerStyle={{
          position: 'relative',
          ...mapStyles,
        }}
        style={mapStyles}
        initialCenter={center}
        zoom={zoom}>
        {Markers}
        <InfoWindow
          marker={activeMarker}
          visible={typeof activeMarker !== 'null'}>
          <ThemeProvider theme={theme}>
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
          </ThemeProvider>
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
  LoadingContainer: LoadingComponent,
})(Maps);
