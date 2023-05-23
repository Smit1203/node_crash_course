const http = require("http");
// the createServer can also take the whole function as a parameter using arrow function
http.createServer((req, res) =>{
    res.write(`<h1>Hello this is smit mehta here</h1>`);
    res.end();
}).listen(4500);
 