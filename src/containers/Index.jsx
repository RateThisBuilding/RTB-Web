import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

import BuildingCard from '../components/BuildingCard'
import GoogleMaps from '../components/GoogleMaps'



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
      <div>
        <div className="content-alt">
          <Grid>
            <Row>
              <Col xs={12} md={12}> {/* Google Maps */}
                <GoogleMaps />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}> {/* Google Maps Search Box */}
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
            </Row>
            <Row>
              <Col xs={2} md={2} xsOffset={10} mdOffset={10}>
                <Button bsStyle="primary" bsSize="large" block>Search</Button>
              </Col>
            </Row>
          </Grid>
        </div>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <h1 className="center">Featured Buildings</h1>
            </Col>
            {this.renderSuggestedCards()}
          </Row>
        </Grid>
      </div>

    )
  }
}
