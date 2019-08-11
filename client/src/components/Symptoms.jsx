import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'

export default function Symptoms(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>Select Your Symptom</Card.Title>
        <br></br>
        <DropdownButton id="symptoms-dropdown" title="Symptoms">
          {props.symptoms.map((sym) => {
            return <Dropdown.Item key={sym.symptomId} onClick={(e) => props.handleSymptomClick(e, sym)}>{sym.name}</Dropdown.Item>
          })}
        </DropdownButton>
      </Card.Body>
    </Card>
  )
}