import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { images: [] }

  // Fetch images after first mount
  componentDidMount() {
    // this.getImages();
  }

  getPasswords = () => {
    // Get the i and store them in state
    fetch('/api/images')
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    return (
      <div className="App">
        {/* TESTING */}
      </div>
    );
  }
}

export default App;