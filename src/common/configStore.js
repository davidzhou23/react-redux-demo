import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import configReducer from './configReducer';

const middlewares = [
    thunk
]

if (process.env.NODE_ENV === 'development') {
    let logger = require('redux-logger').createLogger;
    middlewares.push(logger({collapsed: true}));
}

export default function configStore(initilzeState) {
    let store = createStore(configReducer, initilzeState, applyMiddleware(...middlewares));
    return store;
}