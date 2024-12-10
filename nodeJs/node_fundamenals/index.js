var http = require('http');
var dt = require('./FileSystem/myFirstModule');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(req.url);
    // res.write("The current date and time is " + dt.myDateTime());
    res.end();
}).listen(8080);

// createServer has a callback function which takes 
// two argument request and response
