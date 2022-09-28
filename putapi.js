const express = require('express');
const dbconnect = require('./config-connect-mongo');

const app=express();
app.use(express.json());

app.put('/',async (req,resp)=>{
    let data = await dbconnect();
    let result = await data.updateOne(
        {model:"Oppo"},
        {$set:req.body}
    )
})


app.listen(5000);