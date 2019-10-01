import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
  state = {

    // value to be displayed in the Display component
    displayValue: 0,

    // values to be displayed in the number keys component
    numbers: [],

    // values to be displayed in the operator keys
    operators: [],

    // selected Math operation
    selectedOperator: '',

    // stored value to use for the Math operation
    storedValue: ''
  }

  callOperator = () => {
    console.log('call operation')
  }

  setOperator = () => {
    console.log('set operation')
  }

  updateDisplay = () => {
    console.log('update display')
  }

  render = () => {
    return (
      <div className='calculator-container'></div>
    )
  }
}

export default Calculator
