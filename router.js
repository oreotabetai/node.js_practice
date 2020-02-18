// 
function route(handle, pathname) {
    console.log("About to route a request for " + pathname);

    // functionとの一致
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}
exports.route = route;