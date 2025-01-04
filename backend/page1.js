
    const http = require("http");

    http.createServer(function(req,res){
        res.writeHead(200, {'Content-Type':'text/html'});

        res.write("<h1> Node is Working... </h1>");
        res.write("<p> P is Working... </p>");
        res.write("<p> P is Working... </p>");
        res.write("<p> P... </p>");
       
        res.end();

    }).listen(1234); // http://localhost:1234