const express = require('express');
const dbconnect = require('./config-connect-mongo');
const app = express();

app.get('/',async (req,resp)=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    resp.send(data);
});

app.listen(4500);
