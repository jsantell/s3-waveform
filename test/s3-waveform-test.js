var fs = require("fs");
var expect = require("chai").expect;
var S3 = require("mock-s3").S3;
var createWaveform = require("../").createWaveform;
var FILES = require("./utils").FILES;

var SRC_BUCKET = "ws-tracks";
var DEST_BUCKET = "ws-waveforms";

var smallBuffer = fs.readFileSync(FILES.small.path);
var mediumBuffer = fs.readFileSync(FILES.medium.path);

describe("createWaveform", function () {
  this.timeout(1000 * 60);

  beforeEach(function (done) {
    var count = 0;
    var s3 = this.s3 = new S3();
    s3.createBucket({ Bucket: SRC_BUCKET }, function () {
      s3.createBucket({ Bucket: DEST_BUCKET }, function () {
        s3.putObject({ Bucket: SRC_BUCKET, Key: "small", Body: smallBuffer }, complete);
        s3.putObject({ Bucket: SRC_BUCKET, Key: "medium", Body: mediumBuffer }, complete);
      });
    });

    function complete () {
      if (++count === 2) done();
    }
  });

  it("pulls down a file from S3 and uploads a waveform (121kb mp3)", function (done) {
    var s3 = this.s3;
    createWaveform({
      s3: s3,
      byteSize: FILES.small.size,
      srcBucket: SRC_BUCKET,
      srcKey: "small",
      destBucket: DEST_BUCKET,
      destKey: "small.json"
    }, function (err, data) {
      expect(err).to.not.be.ok;
      s3.getObject({ Bucket: DEST_BUCKET, Key: "small.json" }, function (err, res) {
        var MARGIN = 8;
        // The last sample produces not a max of 127, but -8. This seems
        // due to the MP3 decoding, as parsing the raw wave file does not
        // result in this. For some checks, use close to the end, rather than
        // the very end of the data.
        expect(err).to.not.be.ok;
        var json = JSON.parse(res.Body);
        expect(json.data.length).to.be.equal(4956);
        // Since this file fades in, the earlier min/max values should be closer to 0
        // than subsequent values
        expect(json.data[0]).to.be.closeTo(0, 1);
        expect(json.data[1]).to.be.closeTo(0, 1);
        // Use second-to-last sample due to mp3 decoding
        expect(json.data[json.data.length - 4]).to.be.closeTo(-128, MARGIN);
        expect(json.data[json.data.length - 3]).to.be.closeTo(127, MARGIN);
        for (var i = 2; i < json.data.length; i+=2) {
          if (i === json.data.length - 2) {
            continue;
          }
          expect(json.data[i] - MARGIN <= json.data[i-2]).to.be.ok; //min
          expect(json.data[i+1] + MARGIN >= json.data[i-1]).to.be.ok; //max
        }
        done();
      });
    });
  });

  it("pulls down a file from S3 and uploads a waveform (7.5mb mp3)", function (done) {
    var s3 = this.s3;
    createWaveform({
      s3: s3,
      byteSize: FILES.medium.size,
      srcBucket: SRC_BUCKET,
      srcKey: "medium",
      destBucket: DEST_BUCKET,
      destKey: "medium.json"
    }, function (err, data) {
      expect(err).to.not.be.ok;
      s3.getObject({ Bucket: DEST_BUCKET, Key: "medium.json" }, function (err, res) {
        expect(err).to.not.be.ok;
        var json = JSON.parse(res.Body);
        expect(json.data.length).to.be.equal(5006);
        done();
      });
    });
  });

  it("uses configuration options `samples`, `channels`, and `outputBitDepth`");
});
