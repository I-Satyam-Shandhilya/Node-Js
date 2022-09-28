const express = require('express');
const dbconnect = require('./config-connect-mongo');

const app = express();

app.use(express.json());

app.delete('/',async (req,resp)=>{
    let data = await dbconnect();
    let result = await data.deleteMany(req.body);
})

app.listen(5000);