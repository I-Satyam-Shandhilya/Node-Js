const http = require('http');
const colors = require('colors');
const datacontrol = (req,resp) => {
    resp.write("<h1>Hello this is satyam kumar jha</h1>")
    resp.end();
}
http.createServer(datacontrol).listen(3000);

console.log("package.json".red);
