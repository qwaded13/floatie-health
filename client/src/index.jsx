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
  }

  setForm(formName) {
    this.setState({
      form: formName
    })
  }

  handleSymptomClick(e, symptom) {
    // Get list of diagnoses from clicked symptom
    axios.get(`/diagnoses/${symptom.symptomId}`).then(({data}) => {
      this.setState({
        selectedSymptom: symptom,
        diagnoses: data
      })
      this.setForm('diagnoses')
    })
  }

  handleDiagnosisConfirmation(e, diagnosis) {
    if (this.state.form === 'diagnoses') {
      this.setForm('confirm')
    } else { // User on reject page
      this.setForm('report')
    }
    this.setState({
      selectedDiagnosis: diagnosis
    })
    axios.post(`/diagnoses/${diagnosis.diagnosisId}`)
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
              return  <Diagnoses diagnosis={this.state.diagnoses[0]} handleDiagnosisConfirmation={this.handleDiagnosisConfirmation}/>
      
            case 'reject':
              return null
              
            case 'confirm':
              return (
                <>
                  <Confirm diagnoses={this.state.diagnoses} selections={{symptom: this.state.selectedSymptom, diagnosis: this.state.selectedDiagnosis}}/>
                  <Report diagnoses={this.state.diagnoses}/>
                </>
              )
            
            case 'report':
              return <Report diagnoses={this.state.diagnoses}/>
      
            default:
              break;
          }
        }).bind(this)()}
      </Container>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))