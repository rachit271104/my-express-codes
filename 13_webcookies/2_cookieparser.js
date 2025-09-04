//learning how to use cookies
//! here we learn how to parse cookies and access them  
//to do this step 1:
// * to parse cookies we use package cookie_parser(npm)
//then 
//* require it
// then 
// app.use(cookieParser()) // making its middleware



const express=require('express');
const cookieParser=require('cookie-parser'); //requiring it
const app=express();

const port=8080;
app.use(cookieParser()); // middleware for parsing

app.listen(port,()=>{
    console.log("app is listinig on port 8080");
})

app.get("/",(req,res)=>{
    console.dir(req.cookies);
    // res.send("home page");
    let {greet="no access"}=req.cookies  //printing cookie data
    res.send(greet);
})

app.get("/getcookie",(req,res)=>{
    res.cookie("greet","hello");  //we can send multiple cookies 
    res.cookie("welcome","home");
    res.send("sending u some cookies");
})
