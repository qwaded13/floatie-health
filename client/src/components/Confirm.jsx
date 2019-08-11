import React from 'react'
import Card from 'react-bootstrap/Card'
import Report from './Report.jsx'

export default function Confirm({selections}) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>Thank you for using Floatie Health!</Card.Title>
        <Card.Text>
          It's been a pleasure helping you with your medical needs. <strong>{selections.diagnosis.frequency}</strong> other users with <strong>{selections.symptom.name}</strong> also agreed with <strong>{selections.diagnosis.name}</strong> as their diagnosis. You can find additional diagnosis information in the report below.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}