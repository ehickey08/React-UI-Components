import React from 'react';
import './Button.scss';


const ActionButton = props => {
    if(props.text==='clear')
      return <button className = {props.className} onClick = {props.clear}>{props.text}</button>
    
    if(props.text==='0')
        return <button className = {props.className} onClick = {() => {props.func(props.text)}}>{props.text}</button>

}
    

export default ActionButton;