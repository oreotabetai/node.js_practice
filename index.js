// サーバ
var server = require("./server_2");
// ルータ
var router = require("./router");
// リクエストハンドル
var requestHandlers = require("./requestHandlers");

// キーと値のペアをstartハンドラに渡す
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);