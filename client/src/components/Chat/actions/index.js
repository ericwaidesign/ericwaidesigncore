"strict mode"

/**
 * @description create action which contains payloads of information that
 * send data from the application to the store. These are the only 
 * information send to the store.
 */
import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
const nextUserId = 0;

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});
