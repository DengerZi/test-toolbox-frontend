import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavbarComponent({ children }) {
  return (
    <Navbar bg="danger" expand="lg">
      {children}
    </Navbar>
  )
}
