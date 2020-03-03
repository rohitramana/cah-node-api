'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _cards = require('./cards');

var nStatic = require('node-static');
var fileServer = new nStatic.Server('../loaderio-1212ad9a809c470d05da15ff7dea105c');

var floor = Math.floor;
var random = Math.random;

var nquestions = _cards.questions.length,
    nanswers = _cards.answers.length;
var question = function question() {
  return _cards.questions[floor(random() * nquestions)];
};
var answer = function answer() {
  return _cards.answers[floor(random() * nanswers)];
};
var pick = function pick() {
  return { question: question(), answer: answer() };
};

_http2['default'].createServer(function (req, res) {
  res.writeHead(200, 'Content-Type: application/json');

  var path = _url2['default'].parse(req.url).pathname;
  if (path === '/question') res.write(question());
  else if (path === '/answer') res.write(answer());
  else if (path === '/pick') res.write(JSON.stringify(pick()));
  else if (path === '../loaderio-1212ad9a809c470d05da15ff7dea105c') fileServer.serve(req, res);
  else res.write('USAGE:\n               /question - get a random white card\n               /answer - get a random black card\n               /pick - get a question and answer randomly chosen');

  return res.end();
}).listen(parseInt(process.env.PORT) || 8080);
