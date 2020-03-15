// just playing around :)
const http = require("http");

let hostname = "127.0.0.1";
let port = 3000;

let server = http.createServer((req, res) =>{
    console.log(req.headers)
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    if(req.url == "/"){
        res.end("Welcome to our site");
    }
    else{
        res.end("what are you doing here?\ngo to home page bitch :/")
    }
})

server.listen(port, hostname, () =>{
    console.log("listening of port: " + port)    
})
