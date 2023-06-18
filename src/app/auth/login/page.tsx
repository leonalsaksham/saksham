'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Logo from '../../../assets/images/ring-logo.png'


const Login = () => {
  const [s, setS] = useState('')
  const router = useRouter()
  return (
    <>
      <head>
        <title>Login</title>
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
              <div className='text-center mb-3'>
                <Image src={Logo} className='img-fluid' alt='Logo' />
              </div>
              <h3>Login to access the system</h3>
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
                <InputGroup>
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
                <Button type='submit' className='mt-3 d-block w-100' onClick={(e)=> {e.preventDefault() ; router.push('/dashboard')}}>Login</Button>
                <h6 className='mt-4'>Don't have an account? <Link href='/auth/register' className='text-info text-decoration-none'>Register</Link></h6>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Login