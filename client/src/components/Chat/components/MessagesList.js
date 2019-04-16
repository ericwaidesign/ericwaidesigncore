<<<<<<< HEAD
=======
"strict mode"

>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessagesList = ({ messages }) => (
<<<<<<< HEAD
    <section id="messages-list">
        <ul>
            {messages.map(message => (
                <Message
                    key={message.id}
                    {...message}
                />
            ))}
        </ul>
    </section>
)

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default MessagesList;
=======
  <section id="messages-list">
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          {...message}
        />
    ))}
    </ul>
  </section>
)

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessagesList
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
