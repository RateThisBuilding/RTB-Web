import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class TestComp extends Component{
  defaultProps(){
    return {
      msg: 'Message: Hello World'
    }
  }

  render() {
    return (
      <div id="test">
        This is fetched from the server!
        {this.props.msg}
        <Button>Click me!</Button>
      </div>
    )
  }
}
