//api token as query string

// exploring app.use();

const express=require('express');
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

app.use("/api",(req,res,next)=>{
    let {token}=req.body;
    if(token==="giveaccess"){
        next();
    }
    res.send("access denied");
})

app.get("/api",(req,res)=>{
    res.send("data");
})


//------------------------------------------------
// insted of using app.use() we can also give it as a function

const accesstoken= (req,res,next)=>{
    let {token}=req.body;
    if(token==="giveaccess"){
        next();
    }
    res.send("access denied");
}

app.get("/api",accesstoken,(req,res)=>{
    res.send("data");
})

