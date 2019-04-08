/**
 * ericwaidesigncore\client\src\components\ImageLoader\App.js
 * @author <ericwaidesign@gmail.com>
 */

import React, { Component } from 'react';
import SimpleImageSlider from "simple-image-slider";
import Image from "simple-image-slider/dist/Image";

/**
 * @description This class retrieves a list of images to be
 * output from the ImageLoader class.
 */
class ImageLoaderApp extends Component {

    constructor(props) {
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
        this.getImages();
    }

    /**
     * @description Retrieve a list of images and set them to state.
     */
    getImages = () => {
        // Get the images and store them in state
        fetch('/api/images')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setData(json);
            })
    }

<<<<<<< HEAD
    this.state.images.map(image => {

    });

    // this.state.images.map(image => {
    //   var highRes = require('../../assets/' + image.highResPath + image.highRestFileName);
    //   var lowRes = require('../../assets/' + image.lowResPath + image.lowResFileName);

    //   highResImages.push(highRes);
    //   lowResImages.push(lowRes);
    // });

    return (
      /* Output ImageLoader component */
      <ImageLoader highResImages={highResImages} lowResImages={lowResImages} />
    );
  }
=======
    setData = (json) => {
        const imageArray = [];
        json.forEach((imageData) => {
            imageArray.push(
                new Image(
                    imageData.highRestFileName, 
                    require("../../assets/" + imageData.highResPath + imageData.highRestFileName), 
                    imageData.lowResFileName, 
                    require("../../assets/" + imageData.lowResPath + imageData.lowResFileName)
                )
            );
        });

        this.setState({images: imageArray});
    }

    renderSimpleImageSlider() {
        if (this.state.images.length !== 0) {
            const params = {
                images: this.state.images,
                timeoutDuration: 5000,
                transitionDuration: 1000
            }

            return (
                <SimpleImageSlider params={params} />
            )
        }
    }

    /**
     * @description Construct the paths to the low resolution
     * images and to the high resolution images. Call the
     * ImageLoader component with the given paths.
     */
    render() {
        return (
            <div>
                {this.renderSimpleImageSlider()}
            </div>
        );
    }
>>>>>>> 7365bb950458eb106a1cf96a97136718a5af7434
}

export default ImageLoaderApp;