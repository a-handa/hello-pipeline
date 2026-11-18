const http = require('node:http');
const { greet } = require('./index');

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    const name = new URL(req.url, 'http://localhost').searchParams.get('name');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: greet(name) }));
  })
  .listen(port, () => console.log(`hello-pipeline listening on http://localhost:${port}`));
