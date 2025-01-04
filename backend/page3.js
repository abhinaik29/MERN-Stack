const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});

    let booklist = ['html','css','bootstrap','javascript','react','nodejs'];
    res.write("<h1> Book List </h1>");

    booklist.map((bookname,index)=>{
        res.write("<p>" + bookname + "</p>")
    })

    res.end();

}).listen(1234);