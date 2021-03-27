import React from 'react';
import { connect } from 'react-redux';

import {minusAction} from './redux';

const MinusOne = (props) => {
    return (<div> - </div>);
}

const mapStateToProps = (state, ownedProps) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        minus: dispatch(minusAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinusOne);