// we learn what are signed cookies


const express=require('express');
const cookieParser=require('cookie-parser'); //requiring it
const app=express();

const port=8080;
app.use(cookieParser("secretcode")); // telling cookie-parser to add the secretcode

app.listen(port,()=>{
    console.log("app is listinig on port 8080");
})

//
app.use("/getsignedcookie",(req,res)=>{
    res.cookie("location","india",{signed:true}); //passed signed as true to use it
    res.send("we just send a signed cookie");
})

app.get("/check",(req,res)=>{
    console.log(req.cookies); // this will print a empty obj 
    //cos to print a signed cookie we have to use 
    console.log(req.signedCookies); // will print the signed cookies
    //but how to check if the cookie value was changed or not 
/* ! if we change the value of cookie completely then even we used req.signedCookies we get a empty
    obj
    but if we only change some part of the cookie then we get { location: false }
 */
res.send("checking cookie");    
})



app.get("/",(req,res)=>{
    console.dir(req.cookies);
    // res.send("home page");
    let {greet="no access"}=req.cookies  //printing cookie data
    res.send(greet);
})

// //making cookies
// app.get("/getcookie",(req,res)=>{
//     res.cookie("greet","hello");  
//     res.cookie("welcome","home");
//     res.send("sending u some cookies");
// })

