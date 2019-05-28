import React from 'react';
import NumberButton from '../ButtonComponents/NumberButton';

const functions = [
    {text: "\xF7"},
    {text: "\xD7"},
    {text: "-"},
    {text: '+'},
    {text: '='}
]
const RightSideDisplay = props => {
    return (
        <div className = 'rightSide'>
            {functions.map(func => {
                return <NumberButton buttonStyle = "functionalButton" text={func.text} func = {props.func}/>
            })}
        </div>
    );
}

export default RightSideDisplay;