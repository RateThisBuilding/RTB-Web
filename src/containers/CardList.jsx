import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Card from '../components/Card'

export default class CardList extends Component {
  // static propTypes = {
  //   cards: React.PropTypes.array
  // }

  componentDidMount() {
    // fetch('/api/cardsData').then((res) => {
    //   return res.json()
    // }).then((data) => {
    //   this.setState({ cards: data.cards })
    // }).catch((err) => {
    //   throw err
    // })
  }
  constructor(props) {
    super(props)
    // if(typeof window == "undefined"){
    //   // Server-side
    //   this.state = this.props.cards
    // }else{
    //   this.state = { }
    // }
    this.state = {
      cards: this.props.cards || window.APP_STATE.cards || []
    }
  }

  renderCards() {
    if (!this.state.cards) {
      return (<div>No cards</div>)
    }
    return this.state.cards.map(card =>
      <Card name={card.name} desc={card.desc} key={card.id}/>
    )
  }
  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <section>
            <header><h3>Latest Cards</h3></header>
            <section>
              {this.renderCards()}
            </section>
          </section>
        </Col>
      </Row>
    )
  }
}
