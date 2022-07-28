import React, { Component } from 'react'

export default class Display extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    render() {
        return (
            <td colSpan="3"><p>{this.props.input}</p></td>
        )
    }
}
