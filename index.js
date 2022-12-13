const path = require('path');
const express = require("express")
const port = 3000

const server = express()

server.use(express.static("public"))

server.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/', 'index.html'));
});

server.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/', 'about.html'));
});

server.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/', 'contact.html'));
});

server.get('*', function(req, res){
    res.status(404).sendFile(path.resolve(__dirname, 'public/', '404.html'));
  });


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
  })