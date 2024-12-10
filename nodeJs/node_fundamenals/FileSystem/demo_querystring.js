var http= require('http');
var url = require('url');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.name+ " " + q.surname;
    res.end(txt);
}).listen(8080);


// http://localhost:8080/?year=2017&month=July

// http://localhost:8080/?name=sagar&surname=rana