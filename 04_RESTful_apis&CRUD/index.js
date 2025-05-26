//creating RESTful api's
//ye jo hum app.get() kar te h ye hi ek api ho jayi h aur aase kar k jab hum sab type ki request kar lete h to uss ko hi restful api's bol te h

const { log } = require("console");
const express=require("express");
const app=express();
const port=8080;

const { v4: uuidv4 } = require('uuid');//requiring uuid package

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const path =require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`listining on port ${port}`);
})

let posts=[
    {
        id:uuidv4(),
        username:"rachit",
        content:"learning fullstack",
    },
    {
        id:uuidv4(),
        username:"softy",
        content:"learning java",
    },
    {
        id:"1a",
        username:"rohit",
        content:"mbbs kar ra h",
    },
]

app.get("/",(req,res)=>{
    res.send("server working well");
})

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/new",(req,res)=>{
    res.render("newpost.ejs");
})

app.post("/posts",(req,res)=>{
    console.log(req.body);
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
   // res.send("post req working fine :)");
   res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>p.id===id);
    console.log(post);
    // res.send("req working");
    res.render("show.ejs",{post})
})


app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
let newcontent = req.body.content;

    console.log(newcontent);
    res.send("working");
});

// app.patch("/posts/:id", (req, res) => {
//     console.log("Body received:", req.body); // Add this
//     let { id } = req.params;

//     // Optional chaining to prevent crash
//     let newcontent = req.body?.content;

//     if (!newcontent) {
//         return res.status(400).send("Missing content in request body.");
//     }

//     let post = posts.find((p) => p.id === id);
//     if (!post) {
//         return res.status(404).send("Post not found.");
//     }

//     post.content = newcontent;
//     res.send("Post updated successfully.");
// });
