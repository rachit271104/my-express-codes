// 

// importing modules
const Chat=require("./models/chat.js")

const express=require("express");
const app=express();
const port=8080;

//data base part
const mongoose = require('mongoose');

main()   
  .then((res) => {
    console.log("connected with data_base ")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatwithme');
}
//data base part end here


let methodOverride = require('method-override');  
app.use(methodOverride('_method')); 


app.use(express.urlencoded({extended:true}));
app.use(express.json());

const path =require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`listining on port ${port}`);
})

// index route

app.get("/chats", async (req,res)=>{
  // res.send("chats route");
  let chats= await Chat.find();
  //console.log(chats);
  res.render("index.ejs",{chats});
});


//sending to new chat form
app.get("/chats/new",(req,res)=>{
  // res.send("new message form");
  res.render("msgform.ejs");
})


//taking the new chat form data and adding that to db and showing it in all chats page
app.post("/chats",(req,res)=>{
  console.log(req.body);
  let{from,to,msg}=req.body;
  let newchat = new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at: new Date(),
  });

  //saving the new chat into data_base
  newchat.save().then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })

  res.redirect("/chats");
})


// edit chat page api
app.get("/chats/:id/edit",async (req,res)=>{
  // res.send(`edit chat here`);
  let {id}=req.params;
  console.log(id);
  let chat= await Chat.findById(id);
  res.render("edit.ejs",{chat});

})

//edited chat ko chats page m add kar na 
app.put("/chats/:id",async (req,res)=>{
  let {id}=req.params;
  let {msg: newmsg}=req.body;
  let updatedchat= await Chat.findByIdAndUpdate(id, {msg:newmsg},{runValidators:true,new:true} )
  console.log(updatedchat);
  res.redirect("/chats");
})


//delete chat api
app.delete("/chats/:id",async (req,res)=>{
  let {id}=req.params;
  let deletedchat = await Chat.findByIdAndDelete(id);
  console.log(deletedchat);
  res.redirect("/chats");
})