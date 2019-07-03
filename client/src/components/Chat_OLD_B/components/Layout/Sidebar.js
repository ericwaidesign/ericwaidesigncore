import React from "react";
import User from "../../containers/User";
import "./Sidebar.css";

/**
 * @description this class is consider a component because it does not
 * talk to Redux directly. Map the contacts prop and render a User
 * component for each contact.
 */
const Sidebar = ({ contacts }) => {

    return (
        <aside className="Sidebar">
            {contacts.map(contact =>
                <User user={contact} key={contact.user_id} />)}                                                                      />)}
        </aside>
    );
}

export default Sidebar;

