/**
 * client/src/components/ImageLoader/ImageLoaderApp.js
 */

import React, { Component } from 'react';
import ImageLoader from "./ImageLoader";

/**
 * @description This class retrieves a list of images to be 
 * output from the ImageLoader class.
 * @author <ericwaidesign@gmail.com>
 */
class ImageLoaderApp extends Component {

  constructor(props) {
    console.log('-- ImageLoaderApp.constructor(props) --');

    super(props);

    // stores the retrieved image names
    this.state = {
      imageNames: []
    }
  }

  /**
   * @description Retrieve the images after first mount.
   */
  componentDidMount() {
    console.log('-- ImageLoaderApp.componentDidMount() --');

    this.getImageName();
  }

  /**
   * @description Retrieve a list of images and set them to state.
   */
  getImageName = () => {
    console.log('-- ImageLoaderApp.getImageName() --');

    // Get the images and store them in state
    fetch('/api/images')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({imageNames: json});
      })
  }

  /**
   * @description Construct the paths to the low resolution 
   * images and to the high resolution images. Call the 
   * ImageLoader component with the given paths.
   */
  render() {    
    console.log('-- ImageLoaderApp.render() --');

    let highResImages = [];
    let lowResImages = [];

    this.state.imageNames.map(imageName => {
      let highResImageUrl = require('../../assets/images/highRes/' + imageName);
      highResImages.push(highResImageUrl);

      let lowResImageUrl = require('../../assets/images/lowRes/lowRes_' + imageName);
      lowResImages.push(lowResImageUrl);
    });
            
    return (
      /* Output ImageLoader component */
      <ImageLoader highResImages={highResImages} lowResImages={lowResImages} />
    );
  }
}

export default ImageLoaderApp;