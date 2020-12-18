import { createStore, combineReducers } from 'redux';
import UserReducer from './reducers/userReducer';
import MenuReducer from './reducers/menuReducer'


/**
 * Bind the reducers to the store so that they are accessible from any component they're needed in.
 */
const reducers = combineReducers({
  UserReducer: UserReducer,
  MenuReducer: MenuReducer,
})

export const store = createStore(reducers);