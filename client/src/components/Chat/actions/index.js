/**
 * @description Actions is a regular JavaScript object that usually
 * has 2 properties (type and payload).
 */
import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
const nextUserId = 0;

/**
 * @description
 * @param (message) - The message sent from client.
 * @param (author) - The sender(client) of the message.
 */
export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});

/**
 * @description
 * @param (message) - The message sent from client.
 * @param (author) - The sender(client) of the message.
 */
export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
});

/** @description
 * @param (message) - The message sent from client.
 * @param (author) - The sender(client) of the message.
 */
export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})
