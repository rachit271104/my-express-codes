// all the little things which we learned to do this project are in the learning folder so go through it 

//now in this file we create a server for our project

/* 
1. we have already entered data of 103 users by using faker (to see how go in learning folder)
2.now we create a mini project to show our suers ,delete ,add ect all this using a data base
*/


const express = require('express');
const app = express();

const port = 8080;

let methodOverride = require('method-override');  //requering override package
app.use(methodOverride('_method')); //telling condition to override

// require uuid 
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () => {
  console.log("listining on port 8080");
})


const { faker } = require('@faker-js/faker');  // require faker

const mysql = require('mysql2'); //require my sql
const { log } = require('console');

const connection = mysql.createConnection({  // creating connection
  host: 'localhost',
  user: 'root',
  database: 'myfirstapp',
  password: '1411471'
});

// home page showing the no. of users we have
app.get("/", (req, res) => {
  // res.send("home page");
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      // console.log(result[0]["COUNT(*)"]);
      let countt = result[0]["COUNT(*)"];
      res.render("index.ejs", { countt });
    })
  } catch (err) {
    console.log(err);
    res.send("some error ):");
  }

})

//showing all the users
app.get("/user", (req, res) => {
  try {
    let q = "select id,username,email from user ORDER BY username ASC";
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let allusersdata = result;
      let count = result.length;
      console.log(count);
      // res.send("this will show all the users");
      res.render("showdata.ejs", { allusersdata, count });
    })
  } catch (err) {
    res.send("some error occured in showing all the users");
  }
})


//edit route 
app.get("/user/:id/edit", (req, res) => {
  // res.send('on this page we can change the email address of the user ');
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let userinfo = result[0];
      res.render("edit.ejs", { userinfo });
    })
  } catch (err) {
    console.log('some error came');
  }
})

//handeling the patch req to update the email id
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass, newemail } = req.body;
  let q = `SELECT * FROM user WHERE id= '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      let userinfo = result[0];

      if (formpass == userinfo.password) {
        let update_q = `UPDATE user SET email='${newemail}' WHERE id='${id}'`;
        connection.query(update_q, (err, result) => {
          if (err) throw err;
          result.redirect("/user");
        })
      }
      else {
        // res.send("wrong pass");
        res.render("edit.ejs", { userinfo, error: "Wrong password, try again." })
      }
    })
  } catch (err) {
    console.log('some error came');
  }
})

// to add a new user
app.get("/user/new", (req, res) => {
  // res.send("new user page");
  res.render("newuser.ejs");
})

//to add the user details in data_base & show it in the table
app.post("/user", (req, res) => {
  let { nusername, nemail, npassword } = req.body;
  console.log(req.body);
  //generate id by uuidv4 here
  let id=uuidv4();
  let q = `INSERT INTO user (id,username,email,password) VALUES ('${id}','${nusername}','${nemail}','${npassword}')`;
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log(`entered in db data: ${result}`);
      res.redirect("/user");
    })
  } catch (err) {
    console.log("some error occurred");
  }
})  

//api to delete a user
app.delete("/user/:id",(req,res)=>{
  // res.send("delete id");
  let {id}=req.params;
  let q=`DELETE FROM user WHERE id='${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err;
      console.log(`user with ${id} deleted`);
      res.redirect("/user");
    })
  } catch (err) {
    console.log("some error occured");
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


