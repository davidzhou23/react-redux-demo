import {combineReducers} from 'redux';

import {plusReducer} from '../features/PlusOne/redux';
import {minusReducer} from '../features/MinusOne/redux';

const rootReducers = {
    plus: plusReducer,
    minus: minusReducer
}


export default combineReducers(rootReducers);