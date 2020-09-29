import React from 'react';
import DrawControl from 'react-mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import ReactMapboxGl, { Layer, Source } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoicm5yb2thcyIsImEiOiJja2ZvNjY4ajMwZWtrMnVwY2FrMzduZG56In0.Kh-PTWRMZqEkIgC7GpjM1A',
});

export const MapDisplay = (props) => {
  return (
    <Map
      center={[25.283333, 54.683333]}
      style="mapbox://styles/mapbox/dark-v9"
      onClick={(map, event) => props.onMapClick(map, event)}
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <DrawControl
        controls={{ line_string: true }}
        displayControlsDefault={false}
      />
    </Map>
  );
};

export default MapDisplay;
