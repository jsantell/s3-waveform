var domain = require("domain");
var streams = require("./lib/streams");
var lame = require("lame");

/**
 * Takes a config object detailing where the audio file is on s3, where the waveform
 * data should be saved on s3, a configured S3 instance from `aws-sdk`, and a callback.
 *
 * @param {S3} config.s3 [required]
 * @param {Number} config.byteSize [required]
 * @param {String} config.srcBucket [required]
 * @param {String} config.srcKey [required]
 * @param {String} config.destBucket [required]
 * @param {String} config.destKey [required]
 * @param {Number} config.samples
 *        How many data points should be in the resulting waveform data. [default=5000]
 * @param {Number} config.channels
 *        How many channels is the audio file. [default=2]
 * @param {Number} config.outputBitDepth
 *        Bit depth of the output waveform data. [default=8]
 * @param {Function} callback
 */

function createWaveform (config, callback) {
  var d = domain.create();

  d.on("error", function (err) {
    console.error("domain error");
    callback(err);
  });

  d.run(function () {
    var download = streams.download(config.s3, config.srcBucket, config.srcKey);
    var decoder = new lame.Decoder;
    var generator = streams.waveformGenerator({
      byteSize: config.byteSize,
      samples: config.samples,
      outputBitDepth: config.outputBitDepth,
      channels: config.channels
    });
    var upload = streams.upload(config.s3, config.destBucket, config.destKey);

    download
      .pipe(decoder)
      .pipe(generator)
      .pipe(upload)
      .on("finish", callback);
  });
}
exports.createWaveform = createWaveform;
