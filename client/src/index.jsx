import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Symptoms from './components/Symptoms.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      symptoms: [],
      diagnoses: []
    }
  }

  componentDidMount() {
    axios.get('/symptoms').then(({data}) => {
      this.setState({
        symptoms: data
      })
    })
  }

  render() {
    return (
      <div>
        <Symptoms symptoms={this.state.symptoms}/>
        {/* <Diagnoses diagnoses={this.state.diagnoses}/> */}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))