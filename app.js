// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello World" to all requests.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

// Make the server listen on port 3000.
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
