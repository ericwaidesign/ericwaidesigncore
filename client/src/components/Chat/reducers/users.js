import { generateUser } from '../static-data';

/**
 * @description a function that taks in state and actiona and return
 * a new state.
 * @param {state}
 * @param {action}
 */
export default (state = generateUser(), action) => {
    return state;
}
