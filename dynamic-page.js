const express = require('express');
const path = require('path');

const app = express();
const index = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/index',(req,resp)=>{
    resp.sendFile(`${index}/index.html`);
})

app.get('/profile',(req,resp)=>{
 const detail={
    name:"Satyam",
    city:"Delhi",
    number:'8287433235'
 }

    resp.render('profile',{detail});                                     //ejs file 
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${index}/404.html`);
})
app.listen(4500);