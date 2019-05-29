import React from 'react';
import './Display.scss';
import NumberButtonDisplay from './NumberButtonDisplay';
import ActionButton from '../ButtonComponents/ActionButton';

const LeftSideDisplay = props => {
    return (
        <div className = "leftSide">
            <ActionButton text="clear" className = "actionButton clear" clear = {props.clear} />
            <NumberButtonDisplay func = {props.func}/>
            <ActionButton text="0" className = "actionButton zero" func = {props.func} />
        </div>
    );
}

export default LeftSideDisplay;