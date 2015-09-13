var path = require("path");
var fs = require("fs");

exports.FILES = (function () {
  return ["small", "medium"].reduce(function (files, file) {
    files[file] = {
      path: path.join(__dirname, "fixtures", file + ".mp3")
    };
    files[file].size = fs.statSync(files[file].path).size;
    return files;
  }, {});
})();
