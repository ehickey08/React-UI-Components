import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import LeftSideDisplay from './components/DisplayComponents/LeftSideDisplay';
import RightSideDisplay from './components/DisplayComponents/RightSideDisplay';


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            firstNumber: '',
            secondNumber: '',
            operator: null,
            display: 0
        };
    }
    
    getOperator = (operator) => {
        this.setState({operator});
        let x = parseInt(this.state.firstNumber);
        let y = parseInt(this.state.secondNumber);
        switch(this.state.operator){
            case '+':
                this.setState({
                    display: x+y,
                    firstNumber: x+y,
                    secondNumber: ""
                })
                break;
            case '-':
                this.setState({
                    display: x-y,
                    firstNumber: x-y,
                    secondNumber: ""
                })
                break;
            case '\xF7':
                this.setState({
                    display: Math.round(100*x/y)/100,
                    firstNumber: x/y,
                    secondNumber: ""
                })
                break;
            case '\xD7' :
                this.setState({
                    display: x*y,
                    firstNumber: x*y,
                    secondNumber: ""
                })
                break;
        } 
    }

    getNumber = (digit) => {
        if(this.state.operator === null){
            const temp = this.state.firstNumber + digit;
            this.setState({
                firstNumber: temp,
                display: temp
            })
        } else {
            const temp = this.state.secondNumber + digit;
            this.setState({
                secondNumber: temp,
                display: temp
            })
        }
    }

    getClear = () => {
        this.setState({firstNumber: '', operator: null, secondNumber: '', display: 0})
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
