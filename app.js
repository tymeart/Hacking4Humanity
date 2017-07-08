var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(9615);

// localhost:9615/oauth?response_type=token&client_id=666&redirect_uri=xxx&scope=email
// log in as anonymous - mask all identifiable datas

// privacy policy, what we will look at, what we will use.
