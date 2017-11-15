/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

(function readmeDemo() {
  //#u
  module.exports = function (req, res) {
    res.setHeader('Content-Type', 'text/json; charset=UTF-8');
    res.write(JSON.stringify(req.headers, null, 2) + '\n');
    res.end();
  };
  require('http-listen')(module).loudListen();
  //#r
}());
