function route(pathname) {
    if (pathname == "/favicon.ico") {
        return;
    }
    console.log("About to route a request for " + pathname)
}

exports.route = route