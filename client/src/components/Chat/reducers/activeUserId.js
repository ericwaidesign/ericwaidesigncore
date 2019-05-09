import { SET_ACTIVE_USER_ID } from '../constants/action-types';

/**
 * @description a function that taks in state and actiona and return
 * a new state.
 * @param {state}
 * @param {action}
 */
export default function activeUserId(state = null, action) {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
}
