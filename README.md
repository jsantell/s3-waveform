# s3-waveform

[![Build Status](http://img.shields.io/travis/jsantell/s3-waveform.svg?style=flat-square)](https://travis-ci.org/jsantell/s3-waveform)
[![Build Status](http://img.shields.io/npm/v/s3-waveform.svg?style=flat-square)](https://www.npmjs.org/package/s3-waveform)

Takes an audio file key on S3, creates waveform data for the file, and uploads it back to S3 via streaming.

## Installation

```
$ npm install s3-waveform --save
```

## API

### exports.createWaveform(config, callback)

Takes a configuration object, and a callback upon stream completion. Possible configurations below:

* {S3} s3 [required]
  * An [AWS.S3](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html) instance, or something with the same interface (mock S3 instance for example).
* {Number} byteSize [required]
* {String} srcBucket [required]
* {String} srcKey [required]
* {String} destBucket [required]
* {String} destKey [required]
* {Number} samples
  * How many data points should be in the resulting waveform data. [default=5000]
*  {Number} config.channels
  * How many channels is the audio file. [default=2]
*  {Number} config.outputBitDepth
  * Bit depth of the output waveform data. [default=8]

## Test

```
$ npm test
```

Only mock tests right now, need to add integration.

## License

MIT License, Copyright (c) 2014 Jordan Santell
