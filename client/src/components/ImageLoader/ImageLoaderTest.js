import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ImageLoaderTest.css';
import './style.css';

const CONSTANT = {
  IMAGE_CONTAINER = 'imageContainer',
  LOW_RES = 'lowRes-',
  HIGH_RES = 'highRes-'
}

class ImageLoaderTest extends Component {

  constructor(props) {
    console.log('-- ImageLoaderTest.constructor() --');
    super(props);
    // state changes trigger re-render
    this.state = {
      highResImages: [],
      lowResImages: [],
      lowResCssClass: 'opacity_1'
    };

    // instantiate to access these
    // this.imageRefs = [];
    // this.timeout = null;
    // this.imageContainer = null;
    // this.getImageDim = this.getImageDim.bind(this);
  }

  componentDidMount() {
    console.log('-- ImageLoaderTest.getDerivedStateFromProps() --');
    this.timeout = setTimeout(
      () => this.fadeImages(),
      this.props.duration
    );
    // this.setState({
    //   images: this.props.images.reverse()
    // });
  }

  imageLoaderHandler = () => {
    console.log('-- imageLoaderHandler.fadeImages() --');
    this.setState({ lowResCssClass: 'opacity_0' });
  }

  fadeImages() {
    console.log('-- ImageLoaderTest.fadeImages() --');
    const highResImages = this.state.highResImages;
    const lowResImages = this.state.lowResImages;
    // let { images } = this.state.images;
    let newImageArr = [];

    clearTimeout(this.timeout);
    // const lastImage = this.imageContainer.children[images.length - 1];
    const LastHighResImage = document.getElementById(CONSTANT.IMAGE_CONTAINER)

    newImageArr = [images[images.length - 1]].concat(
      images.slice(0, images.length - 1)
    );

    lastImage.style.transition = `all ${this.props.transitionDuration / 1000}s`;
    lastImage.style.opacity = '0';

    setTimeout(() => {
      lastImage.style.opacity = '1';
      lastImage.style.transition = 'none';
      this.timeout = setTimeout(
        () => this.fadeImages(),
        this.props.duration
      );
      this.setState({ images: newImageArr });
    }, this.props.transitionDuration);
  }

  render() {
    console.log('-- ImageLoaderTest.render() --');
    const highResImages = this.props.highResImages;
    const lowResImages = this.props.lowResImages;

    const imageArray = highResImages.map((highResImage, index) => {
  
      return (
        <div id={`${CONSTANT.IMAGE_CONTAINER}${index}`}>
          {/* Low res placeholder image */}
          <img 
            id={`${CONSTANT.LOW_RES}${index}`}
            className={`image ${this.state.lowResCssClass}`}
            src={lowResImages[index]}
          />
          {/* High res image */}
          <img 
            id={`${CONSTANT.HIGH_RES}${index}`}
            className="image"
            src={highResImage}
            onLoad={this.imageOnLoadHandler}
          />
        </div>
      )
    });

    return (
      <div>
        {imageArray}
      </div>
    );
  }
}

ImageLoaderTest.defaultProps = {
  duration: 5000,
  transitionDuration: 1000
};

// Static properties, no need to instantiate class to access these,
//  use for utility functions that need to access the same properties
ImageLoaderTest.propTypes = {
  highResImages: PropTypes.array.isRequired,
  lowResImages: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transitionDuration: PropTypes.number
};

export default ImageLoaderTest;