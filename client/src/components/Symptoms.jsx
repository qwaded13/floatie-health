import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Symptoms(props) {
  return (
    <Container>
      <Row>
        <Col></Col>

        <Col>
          <DropdownButton id="symptoms-dropdown" title="Symptoms">
            {props.symptoms.map((sym) => {
              return <Dropdown.Item key={sym} onClick={props.handleSymptomClick}>{sym}</Dropdown.Item>
            })}
          </DropdownButton>
        </Col>
        
        <Col></Col>
      </Row>
    </Container>
  )
}