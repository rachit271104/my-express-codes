// we learn error handling in this 

const express=require('express');
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})
