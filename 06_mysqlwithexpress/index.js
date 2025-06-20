// all the little things which we learned to do this project are in the learning folder so go through it 

//now in this file we create a server for our project

/* 
1. we have already entered data of 103 users by using faker (to see how go in learning folder)
2.now we create a mini project to show our suers ,delete ,add ect all this using a data base
*/


const express=require('express');
const app=express();

const port =8080;

let methodOverride = require('method-override');  //requering override package
app.use(methodOverride('_method')); //telling condition to override

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(port, ()=>{
  console.log("listining on port 8080");
})


const { faker } = require('@faker-js/faker');  // require faker

const mysql = require('mysql2'); //require my sql
const { log } = require('console');

const connection = mysql.createConnection({  // creating connection
  host: 'localhost',
  user: 'root',
  database: 'myfirstapp',
  password:'1411471'
});


app.get("/",(req,res)=>{
  // res.send("home page");
  let q=`SELECT COUNT(*) FROM user`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      
      // console.log(result[0]["COUNT(*)"]);
      let countt=result[0]["COUNT(*)"];
       res.render("index.ejs",{countt});
    })
  }catch(err){
    console.log(err);
    res.send("some error ):");
  }

})

app.get("/user",(req,res)=>{
  
  try{
    let q="select id,username,email from user";
    connection.query(q,(err,result)=>{
      if(err) throw err;
      // console.log(result);
      let allusersdata=result;
      let count=result.length;
      console.log(count);
      
      // res.send("this will show all the users");
      res.render("showdata.ejs",{allusersdata,count});
    })
  }catch(err){
    res.send("some error occured in showing all the users");
  }
})





















//------------------------------------------------------------------------------
// garbage 
// try{
//     connection.query(q,(err,result)=>{  //writing queries & handling err 
//         if(err) throw(err);
//         console.log(result);
//         console.log(result.length);
// })
// }catch(err){
//     console.log(err);
// }
// connection.end(); // automatically end the connection


// let createRandomUser = ()=> {
//   return [
//      faker.string.uuid(),
//      faker.internet.username(), // before version 9.1.0, use userName()
//      faker.internet.email(),
//      faker.internet.password(),
//   ];
// }

// //console.log(createRandomUser());
