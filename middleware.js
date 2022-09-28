const express = require('express');                              //middleware is used for filtering or authenticate the request or response 
const app = express();

const middleware = (req,resp,next)=>{
   if(!req.query.age)
   {
    resp.send("please provide your age");
   }
   else if(req.query.age<18)
   {
    resp.send("you are not eligible to access this page");
   }
   else{
    next();
   }
}
app.use(middleware);                                     //this helps in applying middleware through out all the routes of a website


app.get('/',(req,resp)=>{
    resp.send('Welcome to home page');
})

app.get('/user',middleware,(req,resp)=>{                      //it only applies middleware on the user page
    resp.send('Welcome to user page');
})

app.get('/contact',(req,resp)=>{
    resp.send('Welcome to contact page');
})

app.listen(3000);

