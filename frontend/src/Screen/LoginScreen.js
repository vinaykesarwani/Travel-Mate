import React, {useState, useContext} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap';

import AuthContext from '../components/AuthContext';

import {Link} from 'react-router-dom'

function LoginScreen() {
  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
  let {loginUser, user} =useContext(AuthContext)

  return (
    <Container className="my-5" style={{height: '60vh'}}>
        <Row className='g-0' >

          <Col md={4} >
            <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </Col>
          <Col md={2}>
          </Col>
          <Col md='6'>
            
            {user && <h1> Hello {user.username}</h1>}

            <Form className='d-flex flex-column' onSubmit={loginUser}>

              <h2 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h2>

              <Form.Group className="mb-3 me-4" controlId="username">
              <Form.Label className=' fs-4'>Username</Form.Label>
              <Form.Control type='text' name='username' size="lg" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3 me-4" controlId="password">
              <Form.Label className='fs-4'>Password</Form.Label>
              <Form.Control type='password' name='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Group>  

              <Button className="mb-4 px-5" type='submit' color='dark' size='lg'>Login</Button>

              <div>
              <span className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/register"> <Button className="px-5" color='primary' size='sm'>Register</Button> </Link></span> <span className="mb-5 pb-lg-2" style={{color: '#393f81'}}>To use as Guest<Link to="/"> <Button className="px-5" color='primary' size='sm'>Click here</Button> </Link></span>
              </div>

            </Form>
          </Col>
        </Row>

    </Container>
  );
}

export default LoginScreen;