import React, { Component } from 'react'
import { Thumbnail, Button } from 'react-bootstrap'

const TEST_IMG_LOCATION = 'https://a0.muscache.com/im/pictures/61626696/e9e5d6da_original.jpg?aki_policy=xx_large'

export default class BuildingCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, desc, rating, address, year } = this.props.building
    return (
      <Thumbnail src={TEST_IMG_LOCATION} alt="242x200">
        <h3>{name}</h3>
        <p>{desc}</p>
        <pre>{address}</pre>
        <p>
          <Button bsStyle="primary">Contact</Button>&nbsp;
          <Button bsStyle="default">Check out</Button>
        </p>
      </Thumbnail>
    )
  }
}
