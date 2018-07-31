import React, { Component } from 'react';
import './style.css';

class ImageLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lowResCssClass: 'imageLoad_lowRes'
    };

    this.imageLoaderHandler = this.imageLoaderHandler.bind(this);
  }

  imageLoaderHandler() {
    this.setState({ lowResCssClass: 'imageLoad_lowResChanged' });
  }

  render() {
    return (
      <div>
        <img
          className={`imageLoad ${this.state.lowResCssClass}`}
          src={this.props.placeholder}
        />
        <img
          className="imageLoad imageLoad_highRes"
          src={this.props.src}
          onLoad={this.imageLoaderHandler}
        />
      </div>
    );
  };
}

export default ImageLoader;
