// 個々のリクエストを別々に渡す
function start() {
    console.log("Request handler 'start' was called");
}

function upload() {
    console.log("Request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;