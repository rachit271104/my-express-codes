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
    req.flash("success", "User registered successfully");//creating it
    req.flash("err","user not registered");              //creating it
    res.redirect('/hello');
})
app.get("/hello",(req,res)=>{
    // res.send(`hello ${req.session.name}`);               //! insted of passing msg here we use req.local
    // res.render("connect_flesh.ejs",{name:req.session.name , msg:req.flash("success")});
                                                            //!display flash-msg
    //why we use req.local 
    // suppose we have multiple msg to display on conditions to sab ko obj me pass kar ne se aacha h ki local m variable kar do aur ejs m direct acces kar lo 
    res.locals.message=req.flash("success");
    res.render("connect_flesh.ejs",{name:req.session.name });
})

//the best way to do it is pass these res.locals.message=req.flash("success"); in a middleware
//we write middleware at top but abhi likh diya h idhar par for understanding
app.use((req,res,next)=>{
    res.locals.message=req.flash("success");
    res.locals.errors=req.flash("err");
    next();
})
                                                          
                                                             
const port=8080;
app.listen(port, ()=>{
    console.log("app is listning on port 8080");
})