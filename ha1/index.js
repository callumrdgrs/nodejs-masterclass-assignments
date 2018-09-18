/* Node Master Class
* Homework Assignment #1
* Author: Callum Rodgers
*/

var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

var httpServer = http.createServer(function(req, res) {
    //Get the URL and parse it
    var parsedUrl = url.parse(req.url,true);

    //Get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    //Get message for 'hello'
    var message = trimmedPath == 'hello' ? 'Hello friend' : '';
    var messageString = JSON.stringify(message);

    //return the response
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(messageString);

    //Log the response
    console.log('Returning this respone: ', 200, messageString)

});

httpServer.listen(2018,function(){
    console.log("The server is listening on port 2018");
});



