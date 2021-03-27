import React from 'react';
import { connect } from 'react-redux';
import {plusAction} from './redux';

const buttonClick = (props) => {
    console.log('plus click');
    props.plus(props.number);
}
const PlusButton = (props) => {
    return (<div onClick={()=>{buttonClick(props)}}> + </div>);
}

const mapStateToProps = (state, ownedProps) => {
    console.log(state)
    return {state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        plus: (result) => { dispatch(plusAction(result)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlusButton);