// import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import "../../src/components/style.css"

const UserLogin = () => {
  return (
  <div className='userlog'>
    <span className='loginTitle'>Login</span>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      {/* <Form.Label>User Name</Form.Label> */}
      <Form.Control type="email" placeholder="Enter UserName" />
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      {/* <Form.Label>Password</Form.Label> */}
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  )
}

export default UserLogin
