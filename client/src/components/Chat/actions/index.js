<<<<<<< HEAD
"strict mode";

import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
=======
"strict mode"

/**
 * @description create action which contains payloads of information that
 * send data from the application to the store. These are the only 
 * information send to the store.
 */
import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
const nextUserId = 0;
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
<<<<<<< HEAD
})
=======
});
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
<<<<<<< HEAD
})
=======
});
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
<<<<<<< HEAD
})
=======
});
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
