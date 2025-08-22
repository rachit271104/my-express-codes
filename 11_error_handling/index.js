// we learn error handling in this
//     error handling middlewares are defined in the end 

const express=require('express');
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

// 1) SEE DEFAULT ERROR HANDLERS FILE
// 2)WRITING ERROR HANDLERS AS MIDDLEWARES 


app.get("/err",(req,res)=>{
    qpl=pwl;
})

app.use((err,req,res,next)=>{
 //   console.log(err); // his will give as all the paths for error
    //if we dont want all that and a simple error message then 
    console.log("----error------");
    //next();// will find the next non error handling middleware or function 
    // but this will show that cannot get error page but above we have made a page
    //so want basically is happening is that we have handled error as we wanted so in 
    // next() we pass the err which will find the next error handling middleware or function
    
    next(err)// calls next error handling middleware or function
});


app.use((err,req,res,next)=>{
    console.log("----error-2-middleware----");
    next(err);
    // now as there are no more error handling middleware so next function takes
    // it to express default error handler 
});