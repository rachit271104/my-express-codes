//learning how to use cookies

const express=require('express');
const app=express();

const port=8080;

app.listen(port,()=>{
    console.log("app is listinig on port 8080");
})

app.get("/",(req,res)=>{
    res.send("home page");
})

// 
app.get("/getcookie",(req,res)=>{
    res.cookie("greet","hello");  //we can send multiple cookies 
    res.cookie("welcome","home");
    res.send("sending u some cookies");
})