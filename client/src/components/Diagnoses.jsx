import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Diagnoses(props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>Your Recommended Diagnosis:</Card.Title>
        <br></br>
        <h2>{props.diagnosis.name}</h2>
        <br></br>
        <Card.Text>Do you agree with this recommendation?</Card.Text>
        <Button onClick={(e) => props.handleDiagnosisConfirmation(e, props.diagnosis)}>Yes</Button>
        <Button>No</Button>
      </Card.Body>
    </Card>
  )
}