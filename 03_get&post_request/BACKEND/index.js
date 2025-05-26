//understanding get and post request 

const express =require("express")
const app=express();
const port =8080;

app.use(express.urlencoded({extended:true}));  // these are standard lines & we will always write them
app.use(express.json());

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

app.get("/register",(req,res)=>{
    let {user,password}=req.query   // this is how we get the data from the query string
    res.send(`standard get request,welcome ${user}`);
})

app.post("/register",(req,res)=>{
    res.send("standard post req");
})