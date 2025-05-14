//this file acts as our server 
//steps for setting up our server

//strp 1  we require express

const express =require("express");  // it is actually a function 
const app =express(); // and we store that functions value in a variable called app 

//console.log(app);


//-------------------------------------------------------------------------------
let port = 8080;//8080,3000

app.listen(port,()=>{
    console.log(`the app is listning on the port${port}`)
})


//---------------------------------------------------------------------------
// app.use((req,res)=>{  // now to sen a response we will se these 2 arguments which we passes in app.use
//     //console.log(req); // this will print our request object

//     res.send("this is a response send");//this will send a response
//     //console.log("request recived");
// })


//-------------------------------------------------------------------------------
// app.get('/',(req,res)=>{
//     res.send("this is home ")
// })

// app.get('/apple',(req,res)=>{
//     res.send("this is apple page ")
// })

// app.get('/orange',(req,res)=>{
//     res.send("this is orange page ")
// })
 
// //aagar hum bina (*) wale path k code likh de to aagar kisi ne wo apth excess kiya jo hum ne likha hi nhi h then error aata h
// //but hum ne (*) wala path likh diya to kya hoga ki ab user koi bhi path enter kare ko hum se define nhi kiya to wo directly * wale path pe shift ho jata h 
// //and user dosent get any error

// app.get("*",(req,res)=>{
//     res.send("plz write a valid path ")
// })

//-------------------------------------------------------------------------------

//path parameters (parms)

app.get('/',(req,res)=>{
    res.send("this is home ")
})

// app.get('/:username',(req,res)=>{
//     console.log(req.params);
//     res.send("this is home ")
// })

//to pass multiple params
app.get('/:username/:id',(req,res)=>{
    console.log(req.params);
    let {username,id}=req.params;
    res.send(`this is page of ${username} and id is ${id} `);
})