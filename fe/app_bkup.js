const express = require('express');
const path = require('path');
const app = express();
var https = require('https');
var fs = require('fs');
var privateKey  = fs.readFileSync('./private.key', 'utf8');
var certificate = fs.readFileSync('./plugtochat.crt', 'utf8');

var credentials = { cert: certificate,
    passphrase: privateKey,
    ca: [
    fs.readFileSync('./CA_root.crt'),
    fs.readFileSync('./ca_bundle.crt')
],};

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const httpsServer = https.createServer(credentials, app);
const server = require("http").createServer(app);
server.listen(5000, () => {
  console.log("server starting on port : " + 5000);
