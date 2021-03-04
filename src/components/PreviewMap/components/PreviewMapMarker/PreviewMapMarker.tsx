import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Marker, Popup } from 'react-map-gl';

import MapMarker from '../../MapMarker';

const useStyles = makeStyles(() => ({
  marker: {
    width: 20,
    height: 20,
    marginLeft: -10,
    marginTop: -10,
    borderRadius: '50%',
    backgroundColor: 'red'
  }
}));

type PreviewMapMarkerProps = {
  data: MapMarker;
}

const PreviewMapMarker = ({
  data,
}: PreviewMapMarkerProps): JSX.Element => {
  const { latitude, longitude, title } = data;
  const classes = useStyles();
  return (
    <>
      <Marker
        data-testid="marker"
        latitude={latitude}
        longitude={longitude}
        className={classes.marker}
      >
      </Marker>
      <Popup
        data-testid="popup"
        latitude={latitude}
        longitude={longitude}
        closeButton={false}
      >
        {title}
      </Popup>
    </>
  )
}

export default PreviewMapMarker;
