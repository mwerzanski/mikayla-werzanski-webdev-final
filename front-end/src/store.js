import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/userReducer';

/**
 * Bind the reducers to the store so that they are accessible from any component they're needed in.
 */
const reducers = combineReducers({
  UserReducer: UserReducer,
})

export const store = createStore(reducers);