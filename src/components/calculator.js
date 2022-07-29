import React, { Component } from 'react'
import './calculator.css'
import Display from './display';
import Keyboard from './keyboard';

const INIT_STATE = 0;
const FIRST_FIGURE_STATE =1;
const SECOND_FIGURE_STATE =2;
const RESULT_STATE = 3;

export default class Calculator extends Component {

  calculatorState = INIT_STATE;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor(props) {
    super(props)
  
    //cuando se toque esta variable se renderizará la página
    this.state = {
        display : ''
    }
  } 


  isOperator (symbol){
    return (symbol === '+' || symbol === '-' || symbol === 'x' || symbol === '/' );
  }
  
  resolve (){
    console.log(this.operator);
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case 'x':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;
      default:
        console.log('Entra en default')
        break;
    }
  }
  
  handleFigure (number){
    switch (this.calculatorState) {
      case INIT_STATE:
        this.firstFigure = number;
        this.calculatorState = FIRST_FIGURE_STATE;
        this.setState({display: this.state.display + number});
        break;

      case FIRST_FIGURE_STATE:
        this.firstFigure = this.firstFigure * 10 + number;
        this.setState({display: this.state.display + number});
        break;

      case SECOND_FIGURE_STATE:
        this.secondFigure = this.secondFigure * 10 + number;
        this.setState({display: this.state.display + number});
        break;  

      case RESULT_STATE:
        this.result = 0;
        this.secondFigure = 0;
        this.operator ='';
        this.firstFigure = number;
        this.calculatorState = FIRST_FIGURE_STATE;
        this.setState({display: number});
        break;                
    
      default:
        break;
    }
    console.log(this.calculatorState);
  }

  handleSymbol(symbol){
    switch (this.calculatorState) {
      case INIT_STATE:
        break;
      case FIRST_FIGURE_STATE:
        if (this.isOperator(symbol)){
          this.operator = symbol;
          this.calculatorState = SECOND_FIGURE_STATE;
          this.setState({display: this.state.display + symbol});
        }
        break;        

      case SECOND_FIGURE_STATE:
        if (symbol === '='){
            this.result = this.resolve();
            this.setState({display: this.state.display + symbol + this.result.toString() })
            console.log(this.result);
            this.calculatorState = RESULT_STATE;
        }
        break;  

      case RESULT_STATE:
        if (this.isOperator(symbol)){
          this.firstFigure = this.result;
          this.operator = symbol;
          this.secondFigure=0;
          this.result = 0;
          this.setState({display: this.firstFigure.toString() + this.operator});
          this.calculatorState = SECOND_FIGURE_STATE;          
        }
        break;          

      default:
        break;
    }
    console.log(this.calculatorState);
  }

  handlerClick(value) {
      if (typeof value === 'number'){
        this.handleFigure(value);
      } else if(typeof value === 'string'){
        this.handleSymbol(value);
      }
  }

  render() {
    return (
      <div className='container mt-5'>
        <table border="1">
          <thead>
          <tr>
            <Display input={this.state.display}/>
            <td> <input type="button" value="c"/> </td>
          </tr>
          </thead>
          <Keyboard signal={(keypressed)=>{this.handlerClick(keypressed)}}/>
        </table>
      </div>
    )
  }
}

