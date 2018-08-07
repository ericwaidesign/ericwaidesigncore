import React, { Component } from 'react';
import ImageLoader from "./ImageLoader";
import '../../assets/css/App.css';

class ImageLoaderApp extends Component {
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
      var highRes = require('../../assets/images/highRes/' + image);
      var lowRes = require('../../assets/images/lowRes/lowRes_' + image);
      var imageSetDisplaySetting = imageSetCount == 0 ? 'inline' : 'none';
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
      <div>
        {imageArray}
      </div>
    );
  }
}

export default ImageLoaderApp;