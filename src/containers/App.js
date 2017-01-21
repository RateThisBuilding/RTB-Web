import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Grid, Row, Col } from 'react-bootstrap'

import Header from './Header'

const GoogleMaps = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
))

export default class App extends Component {
  render() {
    return (
      <Grid className="full-height" fluid>
        <Header root={this.props.route.path}/>
        <Row className="show-grid" >
          <Col xs={12} md={12}>
            <GoogleMaps
              containerElement={
                <div style={{ height: '500px' }} />
              }
              mapElement={
                <div style={{ height: '100%' }} />
              }
              markers={[{
                position: {
                  lat: 25.0112183,
                  lng: 121.52067570000001,
                },
                key: `Taiwan`,
                defaultAnimation: 2,
              }]}
            />
          </Col>
        </Row>
        {this.props.children}
      </Grid>
    )
  }
}
