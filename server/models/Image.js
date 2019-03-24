// Invoke 'strict' JavaScript mode
'use strict'

function Image(fileName, highResPath, lowResPath) {
  this.fileName = fileName;
  this.highResPath = highResPath;
  this.lowResPath = lowResPath;
}

module.exports = Image;