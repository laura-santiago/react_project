import React, { Component } from 'react'

export default class Keyboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }  

  handlerClick(value) {
      this.props.signal(value);
  }

  render() {
    return (
      <tbody>
          <tr>
            <td><input type="button" value="1" onClick={() => { this.handlerClick(1) }} /> </td>
            <td><input type="button" value="2" onClick={() => { this.handlerClick(2) }} /> </td>
            <td><input type="button" value="3" onClick={() => { this.handlerClick(3) }} /> </td>
            <td><input type="button" value="/" onClick={() => { this.handlerClick('/') }} /> </td>
          </tr>

          <tr>
            <td><input type="button" value="4" onClick={() => { this.handlerClick(4) }} /> </td>
            <td><input type="button" value="5" onClick={() => { this.handlerClick(5) }} /> </td>
            <td><input type="button" value="6" onClick={() => { this.handlerClick(6) }} /> </td>
            <td><input type="button" value="-" onClick={() => { this.handlerClick('-') }} /> </td>
          </tr>

          <tr>
            <td><input type="button" value="7" onClick={() => { this.handlerClick(7) }} /> </td>
            <td><input type="button" value="8" onClick={() => { this.handlerClick(8) }} /> </td>
            <td><input type="button" value="9" onClick={() => { this.handlerClick(9) }} /> </td>
            <td><input type="button" value="+" onClick={() => { this.handlerClick('+') }} /> </td>
          </tr>

          <tr>
            <td><input type="button" value="." onClick={() => { this.handlerClick(".") }} /> </td>
            <td><input type="button" value="0" onClick={() => { this.handlerClick(0) }} /> </td>
            <td><input type="button" value="=" onClick={() => { this.handlerClick('=') }} /> </td>
            <td><input type="button" value="x" onClick={() => { this.handlerClick('x') }} /> </td>
          </tr>

      </tbody>
    )
  }
}
