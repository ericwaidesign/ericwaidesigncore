// Invoke 'strict' JavaScript mode
'use strict'

function Image(highRestFileName, lowResFileName, highResPath, lowResPath) {
  this.highRestFileName = highRestFileName;
  this.lowResFileName = lowResFileName;
  this.highResPath = highResPath;
  this.lowResPath = lowResPath;
}

module.exports = Image;