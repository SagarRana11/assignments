var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

var q = url.parse(adr, true);

console.log('host :', q.host);
console.log("pathName :", q.pathname);
console.log('search :' , q.search);

var queryObject = q.query;

console.log("query object :" ,queryObject);
