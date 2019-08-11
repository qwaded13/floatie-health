import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function Report({diagnoses, startOver}) {
  return (
    <Card style={{width: '1--%'}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Diagnosis</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {diagnoses.map((d) => {
            return (
              <tr>
                <td>{d.name}</td>
                <td>{d.frequency}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Button onClick={startOver}>Start Over</Button>
    </Card>
  )
}