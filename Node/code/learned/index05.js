var server = require('./server05')
var router = require("./router05")
var requestHandlers = require("./requestHandlers05")

var handle = {}
handle["/"] = requestHandlers.start
handle["/start"] = requestHandlers.start
handle["/upload"] = requestHandlers.upload



server.start(router.route, handle)