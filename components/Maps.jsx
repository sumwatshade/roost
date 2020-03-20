import React from 'react';

import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
// TODO: replace with API call?
import places from '../test-data/places';

const Maps = ({zoom}) => {
  let sumLat = 0; let sumLng = 0;

  const Markers = places.map((props) => {
    sumLat += parseFloat(props.lat);
    sumLng += parseFloat(props.lng);

    return <Marker key={props.lat + 1000 * props.lng} {...props} />;
  });

  const center = {
    lat: sumLat / places.length,
    lng: sumLng / places.length,
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.MAPS_API_KEY}}
        defaultCenter={center}
        defaultZoom={zoom}>
        {Markers}
      </GoogleMapReact>
      <style jsx>{`
                .map-container {
                    height: 500px;
                    width: 90vw;
                }
            `}</style>
    </div>

  );
};

Maps.defaultProps = {
  zoom: 13,
};

export default Maps;
