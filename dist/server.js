// var express = require("express");
// var app     = express();
// var path    = require("path");


// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
// });

// app.listen(3000);



// console.log("Running at Port 3000");

// var fs = require('fs');
// var http = require('http');
// var path    = require("path");

// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});

//   var file = fs.createReadStream(path.join(__dirname+'/'));
//   file.pipe(response);

// }).listen(8080);

// console.log('listening on port 8080...');

// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/public')); //__dir and not _dir
// var port = 8000; // you can use any port
// app.listen(port);
// console.log('server on' + port);


// var express = require('express');
// var server = express();
// server.use('/', express.static(__dirname + '/'));
// server.listen(8080);

var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})