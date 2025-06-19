const { faker } = require('@faker-js/faker');  // require faker

const mysql = require('mysql2'); //require my sql

const connection = mysql.createConnection({  // creating connection
  host: 'localhost',
  user: 'root',
  database: 'myfirstapp',
  password:'1411471'
});

let createRandomUser = ()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
     faker.internet.password(),
  ];
}

let q='INSERT INTO  user (id,username,email,password) VALUES ?';

let data=[];
for(let i=1;i<=100;i++){
    // console.log(createRandomUser());
    data.push(createRandomUser());
}

try{
    connection.query(q,[data],(err,result)=>{  //writing queries & handling err 
        if(err) throw(err);
        console.log(result);
        console.log(result.length);
})
}catch(err){
    console.log(err);
}
connection.end();