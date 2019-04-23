/**
 * @description The Reducers not just return the default values,
 * they always return the accumulation of the state based on all
 * previous and current actions.
 *
 * First act as the reducer of the state. Each time a redux reducer
 * is called, the state is passed in with the action (state, action).
 * This state is then reduced (or accumulated) based on the action.
 * Then, the next state is returned. This is one cycle of the classic
 * fold or reduce function.
 */
import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

/**
 * @description the state is reduced (or accumulated) based on the
 * given action.
 */
const chat = combineReducers({
    messages,
    users
});

export default chat;
