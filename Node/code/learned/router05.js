function route(handle, pathname) {
    if (pathname == "/favicon.ico") {
        return;
    }

    if (typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
        return "404 Not found"
    }

    console.log("About to route a request for " + pathname)
}

exports.route = route