import React, { Component } from 'react'
import Display from '../Display/Display'
import './Calculator.css'
import Keypad from '../Keypad/Keypad'

class Calculator extends Component {
  state = {
    // value to be displayed in the Display component
    displayValue: '0',
    // values to be displayed in the number keys component
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0','ce'],
    // values to be displayed in the operator keys
    operators: ['/', 'x', '-', '+'],
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
    const { displayValue, numbers, operators } = this.state
    return (
      <div className='calculator-container'>
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    )
  }
}

export default Calculator
