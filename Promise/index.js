var http = require('http');
var querystring = require('querystring');
// ኎ད服务器的request事件
http.createServer(function (req, res) {
    var postData = '';
    req.setEncoding('utf8');
    // ኎ད请求的data事件
    req.on('data', function (trunk) {
        postData += trunk;
    });
    // ኎ད请求的end事件
    req.on('end', function () {
        res.end(postData);
    });
}).listen(8080);
console.log('服务器启动ྜ成');