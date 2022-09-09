const http = require('http');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:'Satyam kumar jha',email:'satyamkumarjha93950@gmail.com'}));
resp.end();
}).listen(3000);