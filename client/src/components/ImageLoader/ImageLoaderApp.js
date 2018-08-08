import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import ImageLoader from "./ImageLoader";
import './transition.css';

class ImageLoaderApp extends Component {

  state = {
    images: [],
    currentImageIndex: 0
  }

  // Fetch images after first mount
  componentDidMount() {
    this.getImages();
    this.timer = setInterval(this.tick, 3000);
  }

  getImageArraySize() {
    this.state.images.length;
  }

  tick = () => {
    this.setState({currentImageIndex: this.state.currentImageIndex + 1});
    if (currentImageIndex >= this.state.images.length) {
      this.setState({currentImageIndex: 0});
    }
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
      var imageSetDisplaySetting = imageSetCount == 0 ? 'inline' : 'inline';
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
        <CSSTransitionGroup 
          transitionName="imageLoader"
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={300}
        >
          {imageArray}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default ImageLoaderApp;