//we will learn ejs(embaded js templates) in this project

const express=require("express");
const app=express();
const path =require("path");

let port=8080;

app.listen(port,()=>{
    console.log("listning on port 8080");
})

app.set("views",path.join(__dirname,"/views"));

app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render("home.ejs");  //we can also write home insted of home.ejs 
})

//roll dice path
app.get("/rolldice",(req,res)=>{
    //data base se data le k kaise kar te h / syntex,eg.
    let dataval=Math.floor(Math.random()*6 + 1);
    res.render("rolldice.ejs",{dataval})

    //roll dice m likh k kiya jo
    // res.render("rolldice.ejs");    
})

//============================================================
//creating instagram template //instagram.ejs

// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     const followers=["adam","steave","tony","banner","thor"]
//     console.log(username);
//     res.render("instagram.ejs",{username,followers})
// }); 
//----------------------------------------------------------------

//creating instagram page taking data from data base //instapage.ejs

// app.get("/ig/:username",(req,res)=>{
//     const instadata=require("./data.json");  //requering the data file
//     let {username}=req.params;
//     const data=instadata[username];
//     console.log(data);
//     if(data){
//         res.render("instapages.ejs",{data});
//     }
//     else{
//         res.render("error.ejs");
//     }
// })

//-----------------------------------------------------------------------------

//using with static files(ie. public folder(which has css and js files));

//app.use(express.static("public")); //using our static files
// but we use
//
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.get("/ig/:username",(req,res)=>{
    const instadata=require("./data.json");  
    let {username}=req.params;
    const data=instadata[username];
    console.log(data);
    if(data){
        res.render("instapages.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
})