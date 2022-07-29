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
            <td><input type="button" value="1" onClick={() => { this.handlerClick(1) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="2" onClick={() => { this.handlerClick(2) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="3" onClick={() => { this.handlerClick(3) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="/" onClick={() => { this.handlerClick('/') }}className="btn btn-primary btn-lg btn-block" /> </td>
          </tr>

          <tr>
            <td><input type="button" value="4" onClick={() => { this.handlerClick(4) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="5" onClick={() => { this.handlerClick(5) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="6" onClick={() => { this.handlerClick(6) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="-" onClick={() => { this.handlerClick('-') }} className="btn btn-primary btn-lg btn-block"/> </td>
          </tr>

          <tr>
            <td><input type="button" value="7" onClick={() => { this.handlerClick(7) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="8" onClick={() => { this.handlerClick(8) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="9" onClick={() => { this.handlerClick(9) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="+" onClick={() => { this.handlerClick('+') }}className="btn btn-primary btn-lg btn-block" /> </td>
          </tr>

          <tr>
            <td><input type="button" value="." onClick={() => { this.handlerClick(".") }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="0" onClick={() => { this.handlerClick(0) }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="=" onClick={() => { this.handlerClick('=') }}className="btn btn-primary btn-lg btn-block" /> </td>
            <td><input type="button" value="x" onClick={() => { this.handlerClick('x') }}className="btn btn-primary btn-lg btn-block" /> </td>
          </tr>

      </tbody>
    )
  }
}
