//we learn how to use connect flesh
// do npm i connect-flash

const express=require('express');
const app=express();
const session=require('express-session');
const path=require("path");
const flash=require('connect-flash');//require connect-flash


app.set("view engine","ejs");// to display flash msg on frontend
app.set("views",path.join(__dirname,"views"));

//using session middleware
app.use(
    session({
    secret:"mysupersecret",
    resave:false,
    saveUninitialized:true,
 }));
 //*after session middleware we write it
 //~ in this we give 2 parameters ie. key and value
 //here we have just created it so to show it on front end we use view engine and ejs here
app.use(flash());//! using flash middleware


app.get("/register",(req,res)=>{
    let {name="default"}= req.query;
    req.session.name=name;
     // set flash message
    req.flash("success", "User registered successfully");
    res.redirect('/hello');
})
app.get("/hello",(req,res)=>{
    // res.send(`hello ${req.session.name}`);
    res.render("connect_flesh.ejs",{name:req.session.name , msg:req.flash("success")});
})                                                          //!display flash-msg

const port=8080;
app.listen(port, ()=>{
    console.log("app is listning on port 8080");
})