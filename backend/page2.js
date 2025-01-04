
const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/json'});

    let booklist = ['html','css','bootstrap','javascript','react','nodejs'];
    let jsondata = JSON.stringify(booklist);
    res.write(jsondata);

    res.end();

}).listen(1234);