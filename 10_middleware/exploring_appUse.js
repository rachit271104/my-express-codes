// exploring app.use();

const express=require('express');
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

app.use((req,res,next)=>{
    console.log("i will be with every req send");
    next();
})

app.use("/random",(req,res,next)=>{
    console.log("i will word with /random route only");
    next();
})

app.get("/",(req,res)=>{  
    res.send("home page");
})

app.get("/random",(req,res)=>{   
    res.send("random page");
})