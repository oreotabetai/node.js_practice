var http = require("http");
// urlを見つける urlモジュール
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        // postデータ
        var postData = "";

        // url取得
        var pathname = url.parse(request.url).pathname;

        console.log("Request for " + pathname + " received");

        // ルータ
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8000);
    console.log("Server has stated");
}

exports.start = start;