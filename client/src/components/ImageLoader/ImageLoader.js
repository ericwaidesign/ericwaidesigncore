import React, { Component } from 'react';
import './style.css';

class ImageLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lowResCssClass: 'opacity_1'
    };
  }

  imageLoaderHandler = () => {
    this.setState({ lowResCssClass: 'opacity_0' });
  }

  render() {
    return (
      <div>
        {/* Low res placeholder */}
        <img
          style={{
            display: this.props.lowResDisplay,
            zIndex: this.props.lowResZIndex
          }}
          id={this.props.highResId}
          className={`image ${this.state.lowResCssClass}`}
          src={this.props.lowResUrl}
        />
        {/* High res */}
        <img
          style={{
            display: this.props.lowResDisplay,
            zIndex: this.props.highResZIndex
          }}
          id={this.props.lowResId}
          className="image"
          src={this.props.highResUrl}
          onLoad={this.imageLoaderHandler}
        />
      </div>
    );
  };
}

export default ImageLoader;
