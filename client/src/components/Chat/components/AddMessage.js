<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = (props) => {
    let input;
=======
"strict mode"

import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
    let input
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036

    return (
        <section id="new-message">
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
<<<<<<< HEAD
                        props.dispatch(input.value, 'Me');
                        input.value = '';
=======
                        props.dispatch(input.value, 'Me')
                        input.value = ''
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
                    }
                }}
                type="text"
                ref={(node) => {
<<<<<<< HEAD
                    input = node;
=======
                    input = node
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
                }}
            />
        </section>
    )
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

<<<<<<< HEAD
export default AddMessage;
=======
export default AddMessage
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
