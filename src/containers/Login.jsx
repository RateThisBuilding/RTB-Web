import React, { Component } from 'react'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

export default class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: "",
			password: ""
		}
	}

	onUsernameUpdate(e){
    this.setState({ username: e.target.value })
	}
	onQueryUpdate(field, value){
		this.setState({[field] : value})
	}


	render() {
		return (
			<div>
        <div className="content-alt">
          <Grid>
            <Row>
              <Col xs={12} md={12}> {/* Google Maps Search Box */}
              	<h1 className="center">Login</h1>
                <form>
                  <FormGroup
                    controlId="username"
                    /* validationState={this.getValidationState()} */
                  >
                    <FormControl
                      type="text"
                      value={this.state.searchQuery}
                      onChange={this.onQueryUpdate.bind(this, 'username')}
                      placeholder="Username"
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup
                    controlId="password"
                    /* validationState={this.getValidationState()} */
                  >
                    <FormControl
                      type="password"
                      value={this.state.searchQuery}
                      onChange={this.onQueryUpdate.bind(this, 'password')}
                      placeholder="Password"
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </form>
              </Col>
            </Row>
            <Row>
              <Col xs={2} md={2} xsOffset={10} mdOffset={10}>
                <Button bsStyle="primary" bsSize="large" block>Login</Button>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
			)
	}
}