"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var port = 7000;
app.get('/', function (req, res) {
  res.send('ok');
});
var server = app.listen(port, function () {
  return console.log("App listening on port ".concat(port, "!"));
});