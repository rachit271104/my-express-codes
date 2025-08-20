// in this we learn about middleware in express

const express=require('express');
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

//----------------------- part-1 -------------------------

/*
  middleware can do only 2 things
a) send a response (aur iss k baad hamara execution stop ho jata h)
b)calls next middleware or get/post req function call  
*/

//even though hum ne get api sahi likhi h but it will not work as
//  in our middleware we have not defined what to do next after performing its task
// and if we send a response in middleware then it will send the response and and the 
// executin so we never reach the get request so it dosent gets executed 
//this will happen for all get req(/home, /random ,etc) as all res first goes to middleware


// app.use((res,res)=>{
//     console.log("hi i am middleware");
// })

// app.get("/",(req,res)=>{  // not executed
//     res.send("home page");
// })

// app.get("/random",(req,res)=>{   // not executed
//     res.send("random page");
// })

//-----------------------------part-2---------------------------------------------

// learning next()
/* waht will happen here is first middleware will be called then 
as we used next so 
second middleware will be called 
then we used next so 
as there is no middleware now so it finds the matching url
*/


// app.use((res,res,next)=>{
//     console.log("hi i am 1st middleware");
//     next();  // find next middleware if not found then finds matching url
// })

// app.use((res,res,next)=>{
//     console.log("hi i am 2nd middleware");
//     return next();  // find next middleware if not found then finds matching url
//     console.log("this line will not be executed as it is after return next()")
// })

// app.get("/",(req,res)=>{  
//     res.send("home page");
// })

// app.get("/random",(req,res)=>{   
//     res.send("random page");
// })

/* should use return next() because 
even if we write something after the next it will not be executed
*/

//--------------------------part-3----------------------------------
// utility middleware

app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString(); // to get time in proper form
    console.log(req.method, req.hostname, req.path, req.time );    
    // console.log(req);
    next();
})

app.get("/",(req,res)=>{  
    res.send("home page");
})

app.get("/random",(req,res)=>{   
    res.send("random page");
})