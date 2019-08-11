import React from 'react'
import Button from 'react-bootstrap/Button'

export default function Symptoms(props) {
  return (
    <React.Fragment>
      {props.symptoms.map((sym) => {
        return <Button key={sym}>{sym}</Button>
      })}
    </React.Fragment>
  )
}