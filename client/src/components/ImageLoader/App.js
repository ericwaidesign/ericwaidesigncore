/**
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
            imageData: []
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
            .then(data => {
                // callback(data)
                this.setState({ imageData: data });
            });
    }

    // setData = (jsonData) => {
    //     const imageArray = [];
    //     jsonData.forEach((imageData) => {
    //         console.log(imageData);
    //         imageArray.push(
    //             new Image(
    //                 imageData.highRestFileName,
    //                 require("../../assets/" + imageData.highResPath + imageData.highRestFileName),
    //                 imageData.lowResFileName,
    //                 require("../../assets/" + imageData.lowResPath + imageData.lowResFileName)
    //             )
    //         );
    //     });
    //     console.log(imageArray);
    //     this.setState({ images: imageArray });
    // }

    renderSimpleImageSlider() {
        if (this.state.imageData.length !== 0) {
            const images = JSON.parse(this.state.imageData);
            const params = {
                images: images,
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
            <div id="imageLoaderAppContainer">
                {this.renderSimpleImageSlider()}
            </div>
        );
    }
}

export default ImageLoaderApp;