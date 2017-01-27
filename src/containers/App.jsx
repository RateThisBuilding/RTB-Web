import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Grid, Row, Col } from 'react-bootstrap'

import Header from './Header'



export default class App extends Component {
  render() {
    return (
      <div className="full-height">
        <Header root={this.props.route.path}/>
        {this.props.children}
      </div>
    )
  }
}
