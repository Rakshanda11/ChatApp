import { messages } from './Reducers/messages';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            messages
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}