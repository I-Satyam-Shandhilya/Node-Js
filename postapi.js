const express = require('express');
const dbconnect = require('./config-connect-mongo');

const app = express();

app.use(express.json());



app.post('/',async (req,resp)=>{
   let data = await dbconnect();
   let result = await data.insert(req.body);
   resp.send(result);

})


app.listen(3000);