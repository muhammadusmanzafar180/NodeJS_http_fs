const http = require('http');

const fs = require('fs');



const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") {
        return res.end("Hello from '/' route");
    }
    else if (req.url == "/about") {
        return res.end("Hello from '/about' route");
    }
    else if (req.url == "/contact") {
        return res.end("Hello from '/contact' route");
    }
    else if (req.url == "/readFile") {
        fs.readFile('./test.txt', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            return res.end(data);
          });
    }
    else {
        res.writeHead(404, {"Content-type": "text/html"});
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(3000);