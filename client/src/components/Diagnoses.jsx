import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Diagnoses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendation: '',
      remaining: []
    }
  }

  componentDidMount() {
    this.setState({
      recommendation: this.props.diagnoses[0],
      remaining: this.props.diagnoses.slice(1)
    })
  }

  render() {
    return (
      <Card style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title>Your Recommended Diagnosis:</Card.Title>
          <br></br>
          <h2>{this.state.recommendation.name}</h2>
          <br></br>
          <Card.Text>Do you agree with this recommendation?</Card.Text>
          <Button onClick={(e) => this.props.handleDiagnosisConfirmation(e, this.state.recommendation.diagnosisId)}>Yes</Button>
          <Button>No</Button>
        </Card.Body>
      </Card>
    )
  }
}