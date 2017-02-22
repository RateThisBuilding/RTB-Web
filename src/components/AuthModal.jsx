import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class AuthModal extends Component {
  constructor() {
    super()
    
  }
  render () {
    return (
      <div className="static-modal">
        <Modal.Dialog show={this.props.showModal}>
          <Modal.Header>
            <Modal.Title>Auth Modal</Modal.Title>
          </Modal.Header>

         <Modal.Body>
          One fine body...
         </Modal.Body>

         <Modal.Footer>
           <Button>Close</Button>
           <Button bsStyle="primary">Save changes</Button>
         </Modal.Footer>

        </Modal.Dialog>
      </div>
     )
  }
}

export default AuthModal