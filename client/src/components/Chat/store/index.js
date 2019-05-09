import { createStore } from 'redux';

import reducer from '../reducers';
import { contacts } from "../static-data";

const store = createStore(
    reducer,
    // preloaded state, initial state of the app
    { contacts }
)

export default store;
