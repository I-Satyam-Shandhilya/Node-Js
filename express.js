const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send(`<h1>Hello,this is home page</h1><a href="/about">Go to about page</a>`);
});
app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="user name" value="${req.query.name}"/> <button>Click me</button>`);
});
app.listen(4500);