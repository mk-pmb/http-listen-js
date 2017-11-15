
<!--#echo json="package.json" key="name" underline="=" -->
http-listen
===========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Helps me set up an HTTP server for one-function modules.
<!--/#echo -->


Usage
-----

from [howto.js](howto.js):

<!--#include file="howto.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="8" -->
```javascript
module.exports = function (req, res) {
  res.setHeader('Content-Type', 'text/json; charset=UTF-8');
  res.write(JSON.stringify(req.headers, null, 2) + '\n');
  res.end();
};
require('http-listen')(module).loudListen();
```
<!--/include-->


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
