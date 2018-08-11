/**
 * client/src/components/ImageLoader/ImageLoader.js
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './assets/css/ImageLoader.css';

const CONSTANT = {
  IMAGE_CONTAINER: 'imageContainer',
  LOW_RES: 'lowRes-',
  HIGH_RES: 'highRes-',
  THOUSAND_MILLISECS: 1000,
  FIVE_THOUSANDS_MILLISECS: 5000,
  ONE: 1,
  STRING_ONE: '1',
  STRING_ZERO: '0',
  IMAGE_LOADER_CONTAINER: 'imageLoaderContainer',
  IMAGE: 'image'
};

/**
 * @description This class loads the given images and apply 
 * cross fade transition effect between photos.
 * @author ERIC WAI <ericwaidesign@gmail.com>
 */
class ImageLoader extends Component {

  constructor(props) {
    console.log('-- ImageLoader.constructor(props) --');

    super(props);

    this.state = {
      highResImages: [],
      lowResImages: [],
      lowResCssClass: 'opacity_1'
    };
  }

  /**
   * @description Set the timeout with the given interval of 
   * time (timeoutDuration) after the component is mounted 
   * (inserted into the tree). Initialize the transition after 
   * the given interval of time.
   */
  componentDidMount() {
    console.log('-- ImageLoader.componentDidMount() --');

    this.timeout = setTimeout(
      () => this.initialTransition(),
      this.props.timeoutDuration
    );
  }

  /**
   * @description Set the CSS class name in state to trigger a 
   * re-render to update a DOM element's opacity setting to 0.
   */
  setLowResImgOpacityTo0 = () => {
    console.log('-- ImageLoader.imageLoaderHandler() --');

    // Set class name to change the DOM element opacity to 0.
    this.setState({ lowResCssClass: 'opacity_0' });
  }

  /**
   * @description Initialize the cross fade transition.
   */
  initialTransition() {
    console.log('-- ImageLoader.initialTransition() --');

    // clear the timeout set previously
    clearTimeout(this.timeout);

    const highResImages = this.state.highResImages;
    const lowResImages = this.state.lowResImages;
    const numOfImages = highResImages.length;

    // Retrieve the last set of images 
    const imageContainerElement = document.getElementById(CONSTANT.IMAGE_LOADER_CONTAINER);
    const lastImageContainer = imageContainerElement.children[numOfImages - CONSTANT.ONE];

    // Move the 1st item in the array to the last place.
    highResImages.push(highResImages.shift());
    const newHighResImages = highResImages.slice();
    lowResImages.push(lowResImages.shift());
    const newLowResImages = lowResImages.slice();

    this.setTransitionStyles(lastImageContainer, CONSTANT.STRING_ZERO);

    setTimeout(() => {
      this.setTransitionStyles(lastImageContainer, CONSTANT.STRING_ONE);

      this.timeout = setTimeout(
        () => this.initialTransition(),
        this.props.timeoutDuration
      );

      this.setState({
        highResImages: newHighResImages,
        lowResImages: newLowResImages
      });
    }, this.props.timeoutDuration);
  }

  /**
   * @description Set the styles for the given DOM element 
   * (lastImageContainer).
   * @param {*} lastImageContainer the DOM element that 
   * contains the last set of images in the container.
   * @param {*} opacity the opacity value to be set.
   */
  setTransitionStyles(lastImageContainer, opacity) {
    lastImageContainer.style.transition = `all ${this.props.transitionDuration / CONSTANT.THOUSAND_MILLISECS}s`;
    lastImageContainer.style.opacity = opacity;
  }

  /**
   * @description Update state with the data from the creation 
   * parameters (props) passed during instantiation.
   */
  setState() {
    if (this.state.highResImages.length == 0) { 
      this.state.highResImages = this.props.highResImages; 
      console.log(this.state.highResImages);
    }
    if (this.state.lowResImages.length == 0) { 
      this.state.lowResImages = this.props.lowResImages;
      console.log(this.state.lowResImages);
    }
  }

  /**
   * @description Output each set of images. Each set include a 
   * low resolution image for used as placeholder and a high 
   * resolution image. The opacity of the low resolution image 
   * will be set to 0 upon onLoad of the high resolution image. 
   */
  render() {
    console.log('-- ImageLoader.render() --');

    this.setState();

    const highResImages = this.state.highResImages;
    const lowResImages = this.state.lowResImages;

    /* Output each set of images */
    var imageArray = highResImages.map((highResImage, index) => {
      return (
        <div id={`${CONSTANT.IMAGE_CONTAINER}${index}`}>
          {/* Low res placeholder image */}
          <img
            id={`${CONSTANT.LOW_RES}${index}`}
            className={`${CONSTANT.IMAGE} ${this.state.lowResCssClass}`}
            src={lowResImages[index]}
          />
          {/* High res image */}
          <img
            id={`${CONSTANT.HIGH_RES}${index}`}
            className={CONSTANT.IMAGE}
            src={highResImage}
            onLoad={this.setLowResImgOpacityTo0}
          />
        </div>
      )
    });

    return (
      <div id={CONSTANT.IMAGE_LOADER_CONTAINER}>
        {imageArray}
      </div>
    );
  }
}

/**
 * @description Default static properties (props) values.
 */
ImageLoader.defaultProps = {
  timeoutDuration: CONSTANT.FIVE_THOUSANDS_MILLISECS,
  transitionDuration: CONSTANT.THOUSAND_MILLISECS
};

/**
 * @description Type checks to validate the static properties 
 * (props) which will be used by utility functions. These 
 * static properties can be accessed without instantiate the 
 * class.
 */
ImageLoader.propTypes = {
  highResImages: PropTypes.array.isRequired,
  lowResImages: PropTypes.array.isRequired,
  timeoutDuration: PropTypes.number,
  transitionDuration: PropTypes.number
};

export default ImageLoader;