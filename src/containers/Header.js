import React, { Component } from 'react'
import { IndexLink } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">
          <IndexLink to={this.props.root}>App</IndexLink>
        </h1>
      </header>
    )
  }
}
