import React, { Component } from 'react';
import ImageLoader from "./ImageLoader";

class ImageLoaderApp extends Component {

  constructor(props) {
    console.log('-- ImageLoaderApp.constructor(props) --');
    super(props);
    this.state = {
      imageNames: []
    }
  }

  /**
   * Fetch the images after first mount.
   */
  componentDidMount() {
    console.log('-- ImageLoaderApp.componentDidMount() --');

    this.getImageName();
  }

  /**
   * 
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

  render() {    
    console.log('-- ImageLoaderApp.render() --');
    let highResImages = [];
    let lowResImages = [];

    this.state.imageNames.map(imageName => {
      let highResImageUrl = require('../../assets/images/highRes/' + imageName);
      highResImages.push(highResImageUrl);
      console.log(highResImages);

      let lowResImageUrl = require('../../assets/images/lowRes/lowRes_' + imageName);
      lowResImages.push(lowResImageUrl);
      console.log(lowResImages);
    });
            
    return (
      <ImageLoader highResImages={highResImages} lowResImages={lowResImages} />
    );
  }
}

export default ImageLoaderApp;