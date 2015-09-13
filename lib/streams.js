var UploadStream = require("s3-stream-upload");
var lame = require("lame");
var PCMTransform = require("pcm-transform");

var DEFAULT_SAMPLES = 5000;
var DEFAULT_CHANNELS = 2;
var DEFAULT_OUTPUT_BIT_DEPTH = 8;
var MP3_TO_PCM_RATIO = 7.34;

function download (s3, bucket, key) {
  return s3.getObject({ Bucket: bucket, Key: key }).createReadStream();
}
exports.download = download;

function waveformGenerator (options) {
  options = options || {};
  var byteSize = options.byteSize || 0;
  var samples = options.samples || DEFAULT_SAMPLES;
  var channels = options.channels || DEFAULT_CHANNELS;
  var outputBitDepth = options.outputBitDepth || DEFAULT_OUTPUT_BIT_DEPTH;
  var batchSize = parseInt(byteSize * MP3_TO_PCM_RATIO / samples / channels, 10);
  return PCMTransform({ batchSize: batchSize, json: true, outputBitDepth: outputBitDepth });
}
exports.waveformGenerator = waveformGenerator;

function upload (s3, bucket, key) {
  return UploadStream(s3, { Bucket: bucket, Key: key });
}
exports.upload = upload;
