import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertComponent({
  show = false,
  onClose = () => {},
  type = `danger`,
  message = ``
}) {
  if (show) {
    return (
      <Alert variant={type} onClose={onClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    )
  }
  return <></>
}
