const express = require('express');
const path = require('path');

const app = express();
const index = path.join(__dirname,'public');


app.get('/index',(req,resp)=>{
    resp.sendFile(`${index}/index.html`);
})

app.get('*',(req,resp)=>{
    resp.sendFile(`${index}/404.html`);
})
app.listen(3000);