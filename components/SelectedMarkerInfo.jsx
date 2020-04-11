import React from 'react';
import { InfoWindow } from 'google-maps-react';
import WebsiteLink from './WebsiteLink';
import BusinessIcon from './BusinessIcon';
import { Typography, MuiThemeProvider, useTheme } from '@material-ui/core';

const SelectedMarkerInfo = (props) => {
  const theme = useTheme();
  const { activeMarker, markerDetails } = props;

  return (
    <InfoWindow
      marker={activeMarker}
      visible={typeof activeMarker !== 'null'}
      {...props}>
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
  )
}

export default SelectedMarkerInfo;