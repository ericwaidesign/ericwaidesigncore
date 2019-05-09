import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./assets/css/App.css";

/**
 * @description
 */
const App = () => {
    const { contacts } = store.getState();

    return (
        <div className="App">
            <Sidebar contacts={contacts} />
            <Main />
        </div>
    );
};

export default App;