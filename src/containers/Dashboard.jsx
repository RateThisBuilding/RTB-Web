import React, { Component } from 'react'

export default class Dashboard extends Component {
  render() {
    return (
      <main>
        {this.props.children}
      </main>
      )
  }
}
