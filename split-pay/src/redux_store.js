import {createStore, applyMiddleware} from 'redux';
import reducer from './redux/reducer'
import reduxPromiseMiddleware from 'redux-promise-middleware';
export default createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(reduxPromiseMiddleware()))