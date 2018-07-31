import React, { Component } from 'react';
import './style.css';

class ImageLoad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageLoadFinishedClass: 'imageLoad_loadRes'
    };

    this.imageLoadHandler = this.imageLoadHandler.bind(this);
  }

  imageLoadHandler() {
    this.setState({ imageLoadFinishedClass: 'imageLoad_loadResChanged' });
  }

  render() {
    return (
      <div>
        <img
          className={`imageLoad ${this.state.imageLoadFinishedClass}`}
          src={this.props.placeholder}
        />
        <img
          className="imageLoad imageLoad_highRes"
          src={this.props.src}
          onLoad={this.imageLoadHandler}
        />
      </div>
    );
  };
}

export default ImageLoad;
