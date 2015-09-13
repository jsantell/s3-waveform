var fs = require("fs");
var expect = require("chai").expect;
var S3 = require("mock-s3").S3;
var streams = require("../lib/streams");
var Writable = require("streambuffers").Writable;
var bufferEquals = require("buffer-equal");
var FILES = require("./utils").FILES;

var SRC_BUCKET = "ws-tracks";
var DEST_BUCKET = "ws-waveforms";

var smallBuffer = fs.readFileSync(FILES.small.path);
var mediumBuffer = fs.readFileSync(FILES.medium.path);

/**
 * These unit tests are mostly sanity checks, as the unit is so small,
 * that it's pretty much using another lib or stdlib that have been tested.
 */

describe("download stream", function () {
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

  it("streams a file down from s3 (121kb)", function (done) {
    var smallStream = new Writable();
    streams.download(this.s3, SRC_BUCKET, "small")
      .pipe(smallStream)
      .on("finish", finish);

    function finish () {
      expect(bufferEquals(smallStream.toBuffer(), smallBuffer)).to.be.ok;
      done();
    }
  });

  it("streams a file down from s3 (7.5mb)", function (done) {
    var medStream = new Writable();
    streams.download(this.s3, SRC_BUCKET, "medium")
      .pipe(medStream)
      .on("finish", finish);

    function finish () {
      expect(bufferEquals(medStream.toBuffer(), mediumBuffer)).to.be.ok;
      done();
    }
  });
});
