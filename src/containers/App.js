import React, { Component } from 'react'

import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header root={this.props.route.path}/>
        {this.props.children}
      </div>
    )
  }
}
