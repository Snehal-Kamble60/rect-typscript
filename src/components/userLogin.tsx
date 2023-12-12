// import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import "../../src/components/style.css"
// import { MdPassword, MdLogin} from "react-icons/md";
// import { ImUser } from "react-icons/im";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faRightToBracket, faLock} from '@fortawesome/free-solid-svg-icons'

const UserLogin = () => {
  return (
    <div className="Auth-form-container">
    <Form className="Auth-form">
      <div className="Auth-form-content">
        
        <h3 className="Auth-form-title"><FontAwesomeIcon icon={faRightToBracket} /> Sign In</h3>
        <div className="form-group mt-3">
          <Form.Label><FontAwesomeIcon icon={faUser} /> User Name</Form.Label>
          <Form.Control
            type="text"
            className="form-control mt-1"
            placeholder="User Name"
          />
        </div>
        <div className="form-group mt-3">
          <Form.Label><FontAwesomeIcon icon={faLock} /> Password</Form.Label>
          <Form.Control
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </div>
        {/* <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p> */}
      </div>
    </Form>
  </div>
  )
}

export default UserLogin
