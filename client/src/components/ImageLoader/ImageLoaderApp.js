/**
 * ericwaidesigncore\client\src\components\ImageLoader\ImageLoaderApp.js
 * @author <ericwaidesign@gmail.com>
 */

'use strict'

import React, { Component } from 'react';
import ImageLoader from "./index";

/**
 * @description This class retrieves a list of images to be 
 * output from the ImageLoader class.
 * @author <ericwaidesign@gmail.com>
 */
class ImageLoaderApp extends Component {

  constructor(props) {
    console.log('-- ImageLoaderApp.constructor(props) --');

    super(props);

    // stores the retrieved image objects
    this.state = {
      images: []
    }
  }

  /**
   * @description Retrieve the images after first mount.
   */
  componentDidMount() {
    console.log('-- ImageLoaderApp.componentDidMount() --');

    this.getImage();
  }

  /**
   * @description Retrieve a list of images and set them to state.
   */
  getImage = () => {
    console.log('-- ImageLoaderApp.getImage() --');

    // Get the images and store them in state
    fetch('/api/images')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({images: json});
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

    this.state.images.map(image => {
      highResImages.push(image.highResPath);
      lowResImages.push(image.lowResPath);
    });
            
    return (
      /* Output ImageLoader component */
      <ImageLoader highResImages={highResImages} lowResImages={lowResImages} />
    );
  }
}

export default ImageLoaderApp;