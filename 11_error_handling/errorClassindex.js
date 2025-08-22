// in this file we import the custom error class

const express=require('express');
const app=express();
const ExpressError=require('./custom_error_class')

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"access denied");  
})

app.get("/api",(req,res)=>{
    res.send("data");
})

app.get("/err",(req,res)=>{
    qpl=pwl;
})

app.use((err,req,res,next)=>{
    console.log("----error-middleware----");
    // next(err); insted of this we send
    //res.send(err); // insted of sending the user the error object we extract data from 
    // the error obj then then pass it so the user can clearly understand that a error has occured
    let {status=500,message="error occured :("}=err; // setting default status=500 & message 
    res.status(status).send(message);
});