// we learn to connect my sql with express 
const mysql = require('mysql2');  // requiring my sql;

const connection = mysql.createConnection({  // creating connection
  host: 'localhost', // always same
  user: 'root',  // always same
  database: 'myfirstapp', // database name we want to connect with
  password:'1411471' //always same
});

try{
    connection.query("show tables",(err,result)=>{  //writing queries & handling err or write in CLI 
        if(err) throw(err);
        console.log(result);
})
}catch(err){
    console.log(err);
}
connection.end(); // automatically end the connection
