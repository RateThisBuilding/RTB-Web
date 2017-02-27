import React, { Component } from 'react'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'
import { Link } from 'react-router'

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

  fbLogin(){
    window.location = "/auth/facebook";
  }


	render() {
		return (
			<div>
        <div className="content-alt">
          <Grid>
            <Row>
              <Col xs={4} md={4} xsOffset={4} mdOffset={4}> {/* Google Maps Search Box */}
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
                <Button bsStyle="primary" bsSize="large" block style={{width: '50%'}}>Login</Button>
                <Button bsStyle="primary" bsSize="large" block style={{width: '50%'}} onClick={this.fbLogin}>Facebook</Button>
                
              </Col>
              
            </Row>
            
          </Grid>
        </div>
      </div>
			)
	}
}