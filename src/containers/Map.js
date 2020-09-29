import React, { useEffect, Fragment, useState } from 'react';
import { getPreciseDistance } from 'geolib';
import { connect } from 'react-redux';
import * as actions from '../store/actionTypes';
import MapDisplay from '../components/MapDisplay';
import './Map.css';

const Map = (props) => {
  const [display, setDisplay] = useState(null);
  useEffect(() => {
    if (props.coords.length > 1) {
      props.onCalcDistance(
        getPreciseDistance(
          {
            latitude: props.coords[props.coords.length - 2].lat,
            longitude: props.coords[props.coords.length - 2].lng,
          },
          {
            latitude: props.coords[props.coords.length - 1].lat,
            longitude: props.coords[props.coords.length - 1].lng,
          }
        )
      );
    }
  }, [props.coords]);

  useEffect(() => {
    setDisplay(
      <div className="distance">{`Distance : ${props.distance} m`}</div>
    );
  }, [props.distance]);

  const onMapClick = (map, event) => {
    props.onAddCoords(event.lngLat);
  };

  return (
    <Fragment>
      <MapDisplay onMapClick={onMapClick} />
      {display}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    coords: state.coords,
    distance: state.distance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCoords: (coords) =>
      dispatch({
        type: actions.ADD_COORDINATES,
        coords,
      }),
    onCalcDistance: (distance) => {
      dispatch({
        type: actions.CALC_DISTANCE,
        distance,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
