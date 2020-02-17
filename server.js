var http = require("http");

// ver1
http.createServer(function (request, response) {
    response.writeHead(200, { "Cntent-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}).listen(8000);

/*
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");
/////////////
書き換え
function execute(someFunction, value) {
    someFunction(value);
}

execute(funcion(word){ console.log(word) }, "Hello");
*/
// ver2
var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8000);