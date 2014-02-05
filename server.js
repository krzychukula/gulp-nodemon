var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

process.once('SIGUSR2', function () {
    console.log('SIGUSR2');
  process.kill(process.pid, 'SIGUSR2');
});