<<<<<<< HEAD
=======
"strict mode"

>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ users }) => (
<<<<<<< HEAD
    <aside id="sidebar" className="sidebar">
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
)

Sidebar.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
=======
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
>>>>>>> 684959757df129babd8a2c0db4ab61dc14294036
}

export default Sidebar;
