var http = require('http')

var server = http.createServer((request, response) => {
	response.end('hello node.js, change')
})

var port = 3003
server.listen(port)
console.log('server at localhost:3000')