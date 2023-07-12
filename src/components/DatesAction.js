import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesAction = ({deleteData,showData}) => {
  return (
    <Row className="justify-content-center my-2">
    <Col sm="8" className="d-flex justify-content-between">
    <button onClick={deleteData} className="btn-style">delete</button>
    <button onClick={showData} className="btn-style">show</button>
    </Col>
  </Row>
  )
}

export default DatesAction
