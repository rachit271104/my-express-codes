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