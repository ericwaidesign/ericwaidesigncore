import { SET_TYPING_VALUE, SEND_MESSAGE } from '../constants/action-types';

/**
 * @description a function that taks in state and actiona and return
 * a new state.
 * @param {state}
 * @param {action}
 */
export default (state = '', action) => {
    switch (action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return '';
        default:
            return state;
    }
}
