// example of express sessions

const express=require('express');
const app=express();
const session=require('express-session');//require session

//using session middleware
app.use(
    session({
    secret:"mysupersecret",
    resave:false,
    saveUninitialized:true,
 }));


app.get("register",(req,res)=>{
    let {name="default"}= req.query;
    req.session.name=name;
    res.redirect('/hello');
})
app.get("/hello",(req,res)=>{
    res.send(`hello ${req.session.name}`);
})



app.get("/count",(req,res)=>{
    if(req.session.count){
        req.session.count++//inc if exist
    }
    else{
        req.session.count=1;//making variable
    }
    console.log(req.session);
    res.send(`you send a req ${req.session.count} times`)
})

// app.get("/test",(req,res)=>{
//     res.send("test success");
// })

const port=3000;
app.listen(port, ()=>{
    console.log("app is listning on port 3000");
})