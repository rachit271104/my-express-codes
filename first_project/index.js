//this file acts as our server 
//steps for setting up our server

//strp 1  we require express
const express =require("express");  // it is actually a function 
const app =express(); // and we store that functions value in a variable called app 
//console.log(app);

let port = 3000;//8080

app.listen(port,()=>{
    console.log(`the app is listning on the port${port}`)
})

app.use((req,res)=>{  // now to sen a response we will se these 2 arguments which we passes in app.use
    //console.log(req); // this will print our request object

    res.send("this is a response send");//this will send a response
    //console.log("request recived");
})