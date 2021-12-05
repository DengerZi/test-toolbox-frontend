import React from 'react'
import { Form, Container, Row, Col, Button, Spinner } from 'react-bootstrap'

export default function InputFormComponent({
  isLoading = false,
  handleChangeInput = () => {},
  value = ``,
  onSubmit = () => {}
}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()

    onSubmit()
  }

  return (
    <Container>
      <Row className="justify-content-md-center w-100">
        <Col xs={10} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formText">
              <Form.Control
                placeholder="Insert text"
                onChange={({ target }) => handleChangeInput(target.value)}
                value={value}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={2} lg={1}>
          <Button onClick={onSubmit}>
            {isLoading ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                <span className="visually-hidden">Loading...</span>
              </>
            ) : (
              <span>Send</span>
            )}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
