import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { images: [] }

  // Fetch images after first mount
  componentDidMount() {
    this.getImages()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
  }

  getImages = async () => {
    // Get the images and store them in state
    fetch('/api/images')
      .then(res => res.json())
      .then(images => this.setState({ images }));
  }

  render() {
    return (
      <div className="App">
        {/* TESTING */}
        {this.state.images}
      </div>
    );
  }
}

export default App;