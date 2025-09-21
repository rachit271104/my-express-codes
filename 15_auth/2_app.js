const express=require('express');
const app = express();
const port=8080;

const mongoose = require('mongoose');
//connect with mongoose
mongoose.connect("mongodb://127.0.0.1:27017/demouser")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(" not connected"));

app.listen(port,()=>{
    console.log("app is listning on port 8080");
})

//2.1) require passport and passport local
const passport = require("passport");
const localStratagy = require("passport-local");

//2.2) require our user model
const User =require("./1_userschema");

//2.3) to use passport we need session so 
const session=require('express-session');

//2.4) 
const flash=require('connect-flash');

// 2.5) we use passport after our session and flesh middleware as passport need session to store its info
app.use(
    session({
    secret:"mysupersecret",
    resave:false,
    saveUninitialized:true,
 }));

app.use(flash()); 

// now we write al the passports middlewares

app.use(passport.initialize());  //~initialize the process
app.use(passport.session());  //~ same user on every page 
passport.use(new localStratagy(User.authenticate())); //~ authenticate our userSchema wala user

//login/signup and log out info in and out
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//& sending request to our demo_user
app.get("/demo", async (req,res)=>{
    let fakeUser = new User({
        email:"fakeuser@gmail.com",
        username:"user1",
    })

    //* now to register our user we use   
    let registereduser=await User.register(fakeUser,"userpassword")  // here we pass user and password can pass a callback if we want;
    console.log(registereduser);
    res.send(registereduser);
})