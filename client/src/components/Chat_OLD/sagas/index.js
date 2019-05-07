import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
    /*
        takeEvery start multiple instances of the worker saga, it handles
        concurrency
     */
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.username
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewMessage
