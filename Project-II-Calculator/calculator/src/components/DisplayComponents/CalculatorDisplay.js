import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
    return (
        <div className = "mainDisplay">
            {props.display}
        </div>
    );
}

export default CalculatorDisplay;