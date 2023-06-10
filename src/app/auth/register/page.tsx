'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player';

const Register = () => {
  const [s, setS] = useState('')
  return (
    <>
      <head>
        <title>Register</title>
      </head>
      <div className='auth-wrapper'>
        <Row className='g-0 w-100'>
          <Col md={6}>
            <div className='auth-vid'>
              <ReactPlayer
                url='https://cdnl.iconscout.com/lottie/premium/preview-watermark/flight-booking-app-4179010-3468962.mp4'
                playing={true}
                loop={true}
                controls={false}
                className='w-100'
              />
            </div>
          </Col>
          <Col md={6}>
            <div className='auth-form'>
              <h3>Registration Form</h3>
              <Form>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-user"></i></InputGroup.Text>
                  <Form.Control
                    placeholder="Username"
                    type='text'
                    // value={user.userName}
                    name='userName'
                    // onChange={loginHandler}
                    required
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-user"></i></InputGroup.Text>
                  <Form.Control
                    placeholder="email"
                    type='text'
                    // value={user.userName}
                    name='email'
                    // onChange={loginHandler}
                    required
                  />
                </InputGroup>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                  <Form.Control
                    placeholder="Password"
                    type='password'
                    // value={user.password}
                    name='password'
                    // onChange={loginHandler}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                  <Form.Control
                    placeholder="Confirm Password"
                    type='password'
                    // value={user.password}
                    name='confirmPassword'
                    // onChange={loginHandler}
                    required
                  />
                </InputGroup>
                <Button type='submit' className='mt-3 d-block w-100'>Register</Button>
                <h6 className='mt-4'>Already have an account? <Link href='/auth/login' className='text-info text-decoration-none'>Login</Link></h6>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Register