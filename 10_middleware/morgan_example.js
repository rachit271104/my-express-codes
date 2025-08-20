//

const express=require('express');
const morgan = require("morgan"); //require morgan
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.get("/",(req,res)=>{  
    res.send("home page");
})

app.get("/random",(req,res)=>{   
    res.send("random page");
})