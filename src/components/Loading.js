import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingComponent() {
  return (
    <>
      <Spinner animation="border" role="status" variant="primary" size="lg">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  )
}
