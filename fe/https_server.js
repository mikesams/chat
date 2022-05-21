var https = require('https');
var fs = require('fs');
var https_options = {
key: fs.readFileSync("/etc/ssl/chatcerts/private.key"),
cert: fs.readFileSync("/etc/ssl/chatcerts/plugtochat.crt"),
ca: [
fs.readFileSync('/etc/ssl/chatcerts/CA_root.crt'),
fs.readFileSync('/etc/ssl/chatcerts/ca_bundle.crt')
]
};

https.createServer(options, function (req, res) {
res.writeHead(200);
res.end("Welcome to Node.js HTTPS Server");
}).listen(8443)
