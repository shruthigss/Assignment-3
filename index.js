let http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.writeHead(200, {"content-type":"index.html"});
        res.write("<h1>Hello World</h1>");
        res.end("<p>This is Shruthi G.S</p>");
    }
})

server.listen(5000, ()=>{console.log("server up")})
