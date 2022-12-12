const http = require('http');
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=>{
    if(req.url==='/' || req.url==='/index' || req.url==='/index.html'){
        fs.readFile('./index.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(req.url==='/about' || req.url==='/about.html'){
        fs.readFile('./about.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(req.url==='/contact' || req.url==='/contact.html'){
        fs.readFile('./contact.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if (req.url == '/style.css') {
        res.setHeader('Content-type', 'text/css');
        res.write(fs.readFileSync('style.css'));
        return res.end();
    } else {
        fs.readFile('./404.html',function(err,data){
            if (err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })