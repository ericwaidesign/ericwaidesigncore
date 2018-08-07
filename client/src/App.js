import React, { Component } from 'react';
import ImageLoader from "./components/ImageLoader/ImageLoader";
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
    var imageCount = 0;
    var imageSetCount = 0;
    const imageArray = this.state.images.map(image => {
      var highRes = require('../src/assets/images/highRes/' + image);
      var lowRes = require('../src/assets/images/lowRes/lowRes_' + image);
      var imageSetDisplaySetting = imageSetCount=0 ? 'inline' : 'none';
      imageSetCount += 1;
      return (
        <ImageLoader
          highResId={'highRes_' + imageSetCount}
          highResZIndex={imageCount += 1}
          highResDisplay={imageSetDisplaySetting}
          highResUrl={highRes} 
          lowResId={'lowRes_' + imageSetCount}
          lowResZIndex={imageCount += 1}
          lowResDisplay={imageSetDisplaySetting}
          lowResUrl={lowRes} 
        />
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