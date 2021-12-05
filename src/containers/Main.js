import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap'
import { Navbar, InputForm, Skeleton, Alert } from 'components'
import { processTextAction, resetErrorMainAction } from 'redux/actions'

function Main() {
  const dispatch = useDispatch()
  const { loading, processedTexts, error, errorMessage } = useSelector(
    (reduxState) => reduxState.main
  )
  const [state, setState] = useState({
    textInput: ``
  })

  const { textInput } = state

  const handleChangeInput = (value) => {
    setState((prevState) => ({ ...prevState, textInput: value }))
  }

  const handleOnSubmit = () => {
    dispatch(processTextAction(textInput))
    setState((prevState) => ({ ...prevState, textInput: `` }))
  }

  const handleCloseAlert = () => {
    dispatch(resetErrorMainAction())
  }

  return (
    <Container fluid="lg" style={{ backgroundColor: `#EBEBEB`, minHeight: `100vh`, padding: 0 }}>
      <Navbar>
        <InputForm
          isLoading={loading}
          handleChangeInput={handleChangeInput}
          value={textInput}
          onSubmit={handleOnSubmit}
        />
      </Navbar>
      <Alert show={error} message={errorMessage} onClose={handleCloseAlert} />
      <Row className="mt-5 justify-content-center">
        <Col xs={10} lg={8}>
          <Card>
            <Card.Body>
              <Container className="h2 mb-3">Results</Container>
              <Container>
                {loading && processedTexts.map((_, index) => <Skeleton key={index} />)}

                {!loading && processedTexts.length > 0 && (
                  <ListGroup>
                    {processedTexts.map(({ value, palindrome }, index) => (
                      <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">{value}</div>
                        {palindrome && (
                          <Badge variant="primary" bg="success" pill>
                            Palindrome
                          </Badge>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}

                {!loading && !processedTexts.length && (
                  <Container className="h5 text-center my-3">
                    No records, please enter a text to be processed
                  </Container>
                )}
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
