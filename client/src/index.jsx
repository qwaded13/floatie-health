import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Symptoms from './components/Symptoms.jsx'
import Diagnoses from './components/Diagnoses.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      symptoms: [],
      diagnoses: []
    }

    this.handleSymptomClick = this.handleSymptomClick.bind(this)
  }

  handleSymptomClick(e) {
    // Get list of diagnoses from clicked symptom
    let symptom = e.target.text
    axios.get(`/diagnoses/${symptom}`).then(({data}) => {
      this.setState({
        diagnoses: data
      })
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
    // Only render Diagnoses if user got diagnoses from server
    let DiagnosesComponent = !!this.state.diagnoses.length ? <Diagnoses diagnoses={this.state.diagnoses}/> : <div></div>

    return (
      <div>
        <Symptoms symptoms={this.state.symptoms} handleSymptomClick={this.handleSymptomClick}/>
        {DiagnosesComponent}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))