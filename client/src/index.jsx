import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'

import Symptoms from './components/Symptoms.jsx'
import Diagnoses from './components/Diagnoses.jsx'
import Confirm from './components/Confirm.jsx'
import Reject from './components/Reject.jsx'
import Report from './components/Report.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedSymptom: '',
      selectedDiagnosis: '',
      symptoms: [],
      diagnoses: [],
      form: 'symptoms'
    }

    this.handleSymptomClick = this.handleSymptomClick.bind(this)
    this.handleDiagnosisConfirmation = this.handleDiagnosisConfirmation.bind(this)
    this.handleDiagnosisRejection = this.handleDiagnosisRejection.bind(this)
    this.startOver = this.startOver.bind(this)
  }

  handleSymptomClick(e, symptom) {
    // Get list of diagnoses from clicked symptom
    axios.get(`/diagnoses/${symptom.symptomId}`).then(({data}) => {
      this.setState({
        selectedSymptom: symptom,
        diagnoses: data,
        form: 'diagnoses'
      })
    })
  }

  handleDiagnosisConfirmation(e, diagnosis) {
    let currentForm;
    if (this.state.form === 'diagnoses') {
      currentForm = 'confirm'
    } else { // User on reject page
      currentForm = 'report'
    }
    this.setState({
      selectedDiagnosis: diagnosis,
      form: currentForm
    })
    axios.post(`/diagnoses/${diagnosis.diagnosisId}`)
  }

  handleDiagnosisRejection(e) {
    this.setState({
      form:'reject'
    })
  }

  startOver(e) {
    e.preventDefault()
    this.setState({
      selectedSymptom: '',
      selectedDiagnosis: '',
      diagnoses: [],
      form: 'symptoms'
    })
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
              return  <Diagnoses diagnosis={this.state.diagnoses[0]} handleDiagnosisConfirmation={this.handleDiagnosisConfirmation} handleDiagnosisRejection={this.handleDiagnosisRejection}/>
      
            case 'reject':
              return <Reject diagnoses={this.state.diagnoses.slice(1)} handleDiagnosisConfirmation={this.handleDiagnosisConfirmation}/>
              
            case 'confirm':
              return (
                <>
                  <Confirm diagnoses={this.state.diagnoses} selections={{symptom: this.state.selectedSymptom, diagnosis: this.state.selectedDiagnosis}}/>
                  <Report diagnoses={this.state.diagnoses} startOver={this.startOver}/>
                </>
              )
            
            case 'report':
              return <Report diagnoses={this.state.diagnoses} startOver={this.startOver}/>
      
            default:
              break;
          }
        }).bind(this)()}
      </Container>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))