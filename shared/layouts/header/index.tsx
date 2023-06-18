'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Logo from '../../../src/assets/images/ring-logo.png'


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href="/dashboard" className='navbar-logo'>
          <Image src={Logo} alt='Logo' /> Fun Olympics
        </Link>
        <Nav className="ms-auto">
          <NavDropdown title="Welcome User" id="collasible-nav-dropdown">
            <p className='px-3'>Welcome User</p>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/auth/login">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header