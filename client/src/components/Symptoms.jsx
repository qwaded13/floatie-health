import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Symptoms(props) {
  return (
    <React.Fragment>
      <DropdownButton id="symptoms-dropdown" title="Symptoms">
        {props.symptoms.map((sym) => {
          return <Dropdown.Item key={sym}>{sym}</Dropdown.Item>
        })}
      </DropdownButton>
    </React.Fragment>
  )
}