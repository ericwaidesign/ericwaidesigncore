"strict mode"

import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

/**
 * @description a single object that specify how the state changes in 
 * response to actions sent to the store
 */
const chat = combineReducers({
  messages,
  users
})

export default chat;
