import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

import BuildingCard from '../components/BuildingCard'

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

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      buildings: this.props.buildings || window.APP_STATE.buildings || []
    }
  }
  getValidationState() {
    const length = this.state.searchQuery.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  }
  searchOnChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  renderSuggestedCards() {
    if (!this.state.buildings) {
      return (<div>No Buildings</div>)
    }
    return this.state.buildings.map(building => (
      <Col xs={3} md={3} key={building.id}>
        <BuildingCard building={building} />
      </Col>
      )
    )
  }
  render() {
    return (
      <Row>
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
        <Col xs={12} md={12}>
          <form>
            <FormGroup
              controlId="searchBox"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Search for building by address.</ControlLabel>
              <FormControl
                type="text"
                value={this.state.searchQuery}
                onChange={this.searchOnChange}
                placeholder="Enter the address here."
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
        </Col>
        <Col xs={2} md={2} xsOffset={10} mdOffset={10}>
          <Button bsStyle="primary" bsSize="large" block>Search</Button>
        </Col>
        <Col xs={12} md={12}>
          <h1 className="center">Featured Buildings</h1>
        </Col>
        {this.renderSuggestedCards()}
      </Row>
    )
  }
}
