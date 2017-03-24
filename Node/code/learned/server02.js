var http = require('http')

function onRequest(req, res) {
    console.log("Requset received.")
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.write("Hello, world")
    res.end()
}

http.createServer(onRequest).listen(8888)
console.log("Server has started.");