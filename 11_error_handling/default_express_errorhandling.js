// learning default error handling

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
    throw new Error("access denied");  // custom error message for default_express_handler
})

app.get("/api",(req,res)=>{
    res.send("data");
})

/*
The default error handler
Express comes with a built-in error handler that takes care of any errors that might be 
encountered in the app. This default error-handling middleware function is added at the 
end of the middleware function stack.

If you pass an error to next() and you do not handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace. The stack trace is not included in the production environment.
*/

