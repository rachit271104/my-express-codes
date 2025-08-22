const express=require('express');
const app=express();
const ExpressError=require('./custom_error_class');

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access forbidden");
})

app.use((err,req,res,next)=>{
    console.log("error");
    let {status,message}=err;
    res.status(status).send(message);
})