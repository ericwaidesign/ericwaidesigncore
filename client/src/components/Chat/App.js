import React from 'react';

const App = () => (
  <div id="chatAppContainer">
      <section id="chatAppMain">
        <form>
          <input type="text" id="chatAppName" placeholder="Name" />
          <textarea id="chatAppTextArea" placeholder="Message" />
        </form>
      </section>
  </div>
)

export default App