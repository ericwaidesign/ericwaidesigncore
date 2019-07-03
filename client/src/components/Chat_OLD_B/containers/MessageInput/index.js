import React from 'react';

import store from '../../store';
import { setTypingValue, sendMessage } from '../../actions';
import './MessageInput.css';

/**
 * @description this class is consider a container because it talks to
 * redux directly
 */
const MessageInput = ({ value }) => {
    const state = store.getState();

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    }
    const handleSubmit = e => {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(sendMessage(typing, activeUserId));
    }

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    )
}

export default MessageInput;
