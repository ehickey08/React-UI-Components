import React from 'react';
import './Display.scss';
import NumberButton from '../ButtonComponents/NumberButton';


const NumberButtonDisplay = props => {
    let numbers = [7,8,9,4,5,6,1,2,3]

    return (
        <div className = "numButDisplay">
            {numbers.map(num => {
                return <NumberButton text={num} buttonStyle = "numberButton" func = {props.func}/>
            })}
        </div>
    );
}

export default NumberButtonDisplay;