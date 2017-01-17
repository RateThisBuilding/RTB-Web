import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class Card extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div>
        <Panel header={this.props.name} >
          {this.props.desc}
        </Panel>
      </div>
    )
  }
}
