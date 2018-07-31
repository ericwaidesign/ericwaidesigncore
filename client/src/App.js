import React, { Component } from 'react';
import ImageLoad from "./components/ImageLoad/ImageLoad";
import '../src/assets/css/App.css';

class App extends Component {
  // Initialize state
  state = {
    images: []
  }

  // Fetch images after first mount
  componentDidMount() {
    this.getImages();
  }

  getImages = () => {
    // Get the images and store them in state
    fetch('/api/images')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ images: json })
      })
  }

  render() {
    const imageArray = this.state.images.map((image) => {
      var highRes = require('../src/assets/images/' + image);
      var lowRes = require('../src/assets/lowRes/lowRes_' + image);
      return (
        <ImageLoad placeholder={lowRes} src={highRes} />

        // <img src={require('../src/assets/images/' + image)} />
      );
    });

    return (
      <div className="App">
        {imageArray}
      </div>
    );
  }
}

export default App;