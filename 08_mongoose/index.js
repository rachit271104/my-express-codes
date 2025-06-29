// we will learn to use mongoose

const mongoose = require('mongoose');  //requiring mongoose

// making connection bw server and the data base we will use 
// as connect is asyncronous func thereby dont write it directly

/* mongoose.connect('mongodb://127.0.0.1:27017/test'); */

//but as

main()
.then((res)=>{
    console.log("result ")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//making schema
const userschema= new mongoose.Schema({
    username:String,
    email:String,  // we write data types ad they are case sensetive 
    age:Number,     // so first letter capital
})


// creating a model
const User = mongoose.model("User",userschema);    

//inserting data
const user1=new User({username:"rachit",email:"rachit@gmil.com",age:20});
//to save it in mongo
user1.save() 





//-------------------------------------------------
// lec-02 hamera connect function jo h wo asynchronous func h to iss liye hum iss 
// me async await use kar te h
