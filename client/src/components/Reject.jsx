import React from 'react'
import Card from 'react-bootstrap/Card'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropDown from 'react-bootstrap/Dropdown'

export default function Reject({diagnoses, handleDiagnosisConfirmation}) {
  return (
    <Card style={{width: '100%'}}>
      <Card.Body>
        <Card.Title>Sorry we got that wrong</Card.Title>
        <Card.Text>Please select one of the remaining diagnoses for your symptom</Card.Text>
        <br/>
        <DropdownButton title="Remaining Diagnoses">
          {diagnoses.map((d) => {
            return <DropDown.Item onClick={(e) => handleDiagnosisConfirmation(e, d)}>{d.name}</DropDown.Item>
          })}
        </DropdownButton>
      </Card.Body>
    </Card>
  )
}