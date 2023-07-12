import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesList = ({person}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="rectangle p-3">
            {person.length ? (person.map((item)=>{
                  return (
                    <div  key={item.id} className="d-flex border-bottom mx-3">
              <img className="img-avatar " src="img1.jpg" alt="sss" />
                <div className="px-3">
                  <p className="d-inline fs-5">{item.name}</p>
                  <br/>
                  <p className="d-inline fs-6">{item.date}</p>
                </div>
              </div>
                  )
            })) : <h2 className="p-5 text-center">No meeting for Today</h2>}
              
            </div>
          </Col>
        </Row>
  )
}

export default DatesList
