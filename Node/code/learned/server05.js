var http = require("http")

//根据请求的url路径来处理不同的请求
var url = require("url")




function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname
        if (pathname == "/favicon.ico") {
            return;
        }

        console.log("Request for " + pathname + " received.")



        res.writeHead(200, { "Content-Type": "text/plain" })
        var content = route(handle, pathname)
        res.write(content);
        res.end()
    }
    http.createServer(onRequest).listen(8888)
    console.log("Server has started.")
}

exports.start = start