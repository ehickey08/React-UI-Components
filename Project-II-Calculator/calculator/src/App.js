import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import LeftSideDisplay from './components/DisplayComponents/LeftSideDisplay';
import RightSideDisplay from './components/DisplayComponents/RightSideDisplay';


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            total: null,
            firstNumber: null,
            secondNumber: null,
            operator: null,
            display: 0
        };
    }
    
    getOperator = (operator) => {
        if(this.state.operator ===null)
            this.setState({operator});
        else{
            switch(this.state.operator){
                case '+':
                    this.add(this.state.total, this.state.secondNumber);
                    this.state.operator = null;
                    break;
                case '-':
                    this.subtract(this.state.total, this.state.secondNumber);
                    this.state.operator = null;
                    break;
                case '\xF7':
                    this.divide(this.state.total, this.state.secondNumber);
                    this.state.operator = null;
                    break;
                case '\xD7' :
                    this.multiply(this.state.total, this.state.secondNumber);
                    this.state.operator = null;
                    break;
            }
        }
    }

    getNumber = (numberGot) => {
        if(this.state.firstNumber === null){
            this.setState({
                firstNumber: numberGot,
                total: numberGot,
                display: numberGot
            })
        } else {
            this.setState({
                secondNumber: numberGot,
                display: numberGot
            })
        }
    }

    getClear = () => {
        this.setState({total: 0, firstNumber: null, operator: null, secondNumber: null, display: 0})
    }

    add = (x,y) => {
        this.setState({
            total: x+y,
            display: x+y
        })
    }

    subtract = (x,y) => {
        this.setState({
            total: x-y,
            display: x-y
        })
    }

    multiply = (x,y) => {
        this.setState({
            total: x*y,
            display: x*y
        })
    }

    divide = (x,y) => {
        this.setState({
            total: x/y,
            display: x/y
        })
    }
    render(){
        return (
          <div className = 'container'>
              <CalculatorDisplay display = {this.state.display}/>
              <div className = "calcBase">
                  <LeftSideDisplay func = {this.getNumber} clear = {this.getClear}/>
                  <RightSideDisplay func = {this.getOperator}/>
              </div>
          </div>
        );
    }
} 


export default App;
