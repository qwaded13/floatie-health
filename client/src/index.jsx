import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'

import Symptoms from './components/Symptoms.jsx'
import Diagnoses from './components/Diagnoses.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      symptoms: [],
      diagnoses: [],
      form: 'symptoms'
    }

    this.handleSymptomClick = this.handleSymptomClick.bind(this)
    this.handleDiagnosisConfirmation = this.handleDiagnosisConfirmation.bind(this)
  }

  setForm(formName) {
    this.setState({
      form: formName
    })
  }

  handleSymptomClick(e, symptomId) {
    // Get list of diagnoses from clicked symptom
    axios.get(`/diagnoses/${symptomId}`).then(({data}) => {
      this.setState({
        diagnoses: data
      })
      this.setForm('diagnoses')
    })
  }

  handleDiagnosisConfirmation(e, diagnosisId) {
    if (this.state.form === 'diagnoses') {
      this.setForm('confirm')
    } else { // User on reject page
      this.setForm('report')
    } 
    axios.post(`/diagnoses/${diagnosisId}`)
  }

  handleDiagnosisRejection(e) {
    this.setForm('reject')
  }

  componentDidMount() {
    // Get list of symptoms
    axios.get('/symptoms').then(({data}) => {
      this.setState({
        symptoms: data
      })
    })
  }

  render() {
    return (
      <Container>
        {(function() {
          switch (this.state.form) {
            case 'symptoms':
              return <Symptoms symptoms={this.state.symptoms} handleSymptomClick={this.handleSymptomClick}/>;
      
            case 'diagnoses':
              return  <Diagnoses diagnoses={this.state.diagnoses} handleDiagnosisConfirmation={this.handleDiagnosisConfirmation}/>
      
            case 'reject':
              return null
              
            case 'confirm':
              return null
      
            case 'report':
              return null
      
            default:
              break;
          }
        }).bind(this)()}
      </Container>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))