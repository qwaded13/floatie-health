import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Diagnoses(props) {
  return (
    <Card style={{ width: '50%' }}>
      <Card.Body>
        <Card.Title>Your Recommended Diagnosis:</Card.Title>
        <h2>{props.diagnosis.name}</h2>
        <br></br>
        <Card.Text>Do you agree with this recommendation?</Card.Text>
        <Button className='yesButton' style={{border: 'none'}}onClick={(e) => props.handleDiagnosisConfirmation(e, props.diagnosis)}>Yes</Button>
        <Button className='noButton' style={{backgroundColor: '#ef5350', border: 'none'}} onClick={(e) => props.handleDiagnosisRejection(e)}>No</Button>
      </Card.Body>
    </Card>
  )
}