import React, { Component } from 'react'
import Display from '../Display/Display'
import './Calculator.css'

class Calculator extends Component {
  state = {
    // value to be displayed in the Display component
    displayValue: '0',
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
    const { displayValue } = this.state
    return (
      <div className='calculator-container'>
        <Display displayValue={displayValue} />
      </div>
    )
  }
}

export default Calculator
