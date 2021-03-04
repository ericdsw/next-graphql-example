import React, { useState, useMemo } from 'react';
import ReactMapGL from 'react-map-gl';

import MapMarker from './MapMarker'
import { PreviewMapMarker } from './components';

export type PreviewMapProps = {
  startingLatitude?: number;
  startingLongitude?: number;
  startingZoom?: number;
  width?: number | string;
  height?: number | string;
  markers?: MapMarker[];
  drawStatic?: boolean;
}

type MapViewportProps = {
  latitude: number;
  longitude: number;
  zoom: number;
}

const PreviewMap = ({
  startingLatitude = 0,
  startingLongitude = 0,
  startingZoom = 0,
  width = 600,
  height = 300,
  markers = [],
  drawStatic = false
}: PreviewMapProps): JSX.Element => {

  const markerElements = useMemo(
    () => markers.map(
      (marker): React.ReactElement => <PreviewMapMarker key={marker.title} data={marker} />
    ),
    [markers]
  );

  const [viewport, setViewport] = useState<MapViewportProps>({
    latitude: startingLatitude,
    longitude: startingLongitude,
    zoom: startingZoom,
  });

  return (
    <ReactMapGL
      {...viewport}
      data-testid="map-gl"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken="pk.eyJ1IjoiMDVlcmljIiwiYSI6ImNrbHNhZjdmdDA2bjUzMXBsbWVxNGRyeTIifQ.iUE3UUihULMZ4o6agmEQ-Q"
      onViewportChange={setViewport}
      width={width}
      height={height}
      dragPan={!drawStatic}
      dragRotate={!drawStatic}
      scrollZoom={!drawStatic}
      doubleClickZoom={!drawStatic}
    >
      {markerElements}
    </ReactMapGL>
  );
}

export default PreviewMap;
