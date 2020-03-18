import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {API_KEY} from '../api-key';

export default function Maps({ center, zoom}) {
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}>
                    <Marker
                    lat={32.7445494}
                    lng={-117.1706039} />
            </GoogleMapReact>
            <style jsx>{`
                .map-container {
                    height: 500px;
                    width: 90vw;
                }
            `}</style>
        </div>

    )
}