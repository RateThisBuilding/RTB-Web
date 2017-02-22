import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const GoogleMapsConstructor = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
    defaultOptions={{
      scrollwheel: false
    }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
))

class GoogleMaps extends Component {
  render() {
    return (
      <GoogleMapsConstructor
        containerElement={
          <div style={{ height: '500px', backgroundColor: 'grey' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        markers={[{
          position: {
            lat: 25.0112183,
            lng: 121.52067570000001,
          },
          key: `Vancouver`,
          defaultAnimation: 2,
        }]}
      />
    ) 
    
  }
}

export default GoogleMaps