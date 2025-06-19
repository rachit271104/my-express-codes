const mysql = require('mysql2'); //require my sql

const connection = mysql.createConnection({  // creating connection
  host: 'localhost',
  user: 'root',
  database: 'myfirstapp',
  password:'1411471'
});

// creating a variable and writing all the queries in it then pass that variable in the 
//connect.query function (its just a better way of writing);
// let q="show tables";

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


//------------------------------------------------------------------


// creating a variable and writing all the queries in it then pass that variable in the 
//connect.query function (its just a better way of writing);
// let q='INSERT INTO  user (id,username,email,passward) VALUES (?,?,?,?)';
// let user=[1,'rachit','r@gmail.com',"rachit123"];

// try{
//     connection.query(q,user,(err,result)=>{  //writing queries & handling err 
//         if(err) throw(err);
//         console.log(result);
//         console.log(result.length);
// })
// }catch(err){
//     console.log(err);
// }
// connection.end(); // automatically end the connection




//----------------------------------------------
// for multiple values in array of array
let q='INSERT INTO  user (id,username,email,passward) VALUES ?';

let usersss=[
    [2,'rachitb','r@gmail.comb',"rachit123b"],
    [3,'rachitc','r@gmail.comc',"rachit123c"]
];


try{
    connection.query(q,[usersss],(err,result)=>{  //writing queries & handling err 
        if(err) throw(err);
        console.log(result);
        console.log(result.length);
})
}catch(err){
    console.log(err);
}
connection.end(); 
