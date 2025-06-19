// learning to use faker 
// see file insertdata with placeholder to enter data with a variable;

const { faker } = require('@faker-js/faker');  // require faker

const mysql = require('mysql2'); //require my sql

const connection = mysql.createConnection({  // creating connection
  host: 'localhost',
  user: 'root',
  database: 'myfirstapp',
  password:'1411471'
});

// creating a variable and writing all the queries in it then pass that variable in the 
//connect.query function (its just a better way of writing);
// using faker to enter all the data in the table
let q='INSERT INTO  user (id,username,email,passward) VALUES ?';

let data=[];


try{
    connection.query(q,(err,result)=>{  //writing queries & handling err 
        if(err) throw(err);
        console.log(result);
        console.log(result.length);
})
}catch(err){
    console.log(err);
}
connection.end(); // automatically end the connection


let createRandomUser = ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
     faker.internet.password(),
  ];
}

//console.log(createRandomUser());
