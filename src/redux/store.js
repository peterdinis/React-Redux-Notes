import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import notesReducer from './reducers/notesReducer';


const store = createStore(
    notesReducer,
    applyMiddleware(
        thunk,
        logger
    )
)

export default store;