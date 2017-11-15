/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var http = require('http');

function ifFun(x, d) { return ((typeof x) === 'function' ? x : d); }

module.exports = function (onRequest, port) {
  if ((!ifFun(onRequest)) && ifFun(onRequest.exports)) {
    if (require.main !== onRequest) { return false; }
    onRequest = onRequest.exports;
  }
  var srv = http.createServer();
  if (onRequest) { srv.on('request', onRequest); }
  srv.listen(+process.env.PORT || +port || 8080);
  function logAddr() { console.log('Now listening on', srv.address()); }
  srv.loudListen = function () {
    srv.on('listening', logAddr);
    return srv;
  };
  return srv;
};
