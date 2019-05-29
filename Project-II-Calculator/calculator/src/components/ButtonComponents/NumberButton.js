import React from 'react';
import './Button.scss';


const NumberButton = props => {
    return(
        <button className={props.buttonStyle} onClick = {() => props.func(props.text)}>{props.text}</button>
    );
}

export default NumberButton;