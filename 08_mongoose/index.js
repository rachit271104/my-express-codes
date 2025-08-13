// we will learn to use mongoose

const mongoose = require('mongoose');  //requiring mongoose

// making connection bw server and the data base we will use 
// as connect is asyncronous func thereby dont write it directly

/* mongoose.connect('mongodb://127.0.0.1:27017/test'); */

//but as

main()   // main() calls the async function
  .then((res) => {
    console.log("result ")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

//making schema
const userschema = new mongoose.Schema({
  username: String,
  email: String,  // we write data types and they are case sensetive 
  age: Number,     // so first letter capital
})


// creating a model
const User = mongoose.model("User", userschema);

//inserting data
const user1 = new User({ username: "rachit", email: "rachit@gmil.com", age: 20 });

//to save it in mongo
// user1.save() ; //it  also returns an promise

// const user2=new User({username:"eve",email:"eve@gmil.com",age:20});
// user2.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// INSERTMANY() Ex:-
// User.insertMany([
//   {username:"tony",email:"tony@gmil.com",age:40},
//   {username:"stark",email:"stark@gmil.com",age:30}
// ]).then((res)=>{
//   console.log(res);
// })


// using find() with model
// User.find({})  // gives all
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err)})



//for specific condition
// User.find({age:{ $gt:30 }}) 
// .then((res)=>{
//   console.log(res[0].username);
// })
// .catch((err) =>{console.log(err)})

// findOne()
// User.findOne({age:{ $gt:30 }}) 
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err)})



//fineById()
// User.findById('6862d266a85ab564c4396c1b') // directly paste id here
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err)})


//------------------------------------------------------------

// UPDATE
/*does not returns the documents insted returns a object with status */

//updateOne()
// User.updateOne({username:"rachit"},{$set: { age: 23 }}) 
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err)})


//updateMany()
// User.updateMany({username:"rachit"},{$set: { age: 23 }}) 
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err)})

//------------------------------------------------------------

//findOneAndUpdate() 
//also returns a query opject

//   User.findOneAndUpdate({username:"rachit"},{$set: { age: 50 }},{new:true}) 
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err)})

//-----------------------------------------------------------------------

//findByIdAndUpdate()

//  User.findByIdAndUpdate('68606bc995d37eee76926be0',{$set: { age: 5 }},{new:true}) 
// .then((res)=>{
//   console.log(res);
// })
// .catch((err) =>{console.log(err)})

//-------------------------------------------------------------------------------

//DELETE

//deleteOne()

// User.deleteMany({username:"tony"}).then((res)=>{
//   console.log(res);
// })


//deleteMany()
// User.deleteMany({age:30}).then((res)=>{
//   console.log(res);
// })

//-------------------------------------------------------------


//findByIdAndDelete()
/*  returns the documents deleted */

// User.findByIdAndDelete('68606bc995d37eee76926be0').
//   then((res) => {
//     console.log(res);
//   })


//findONeAndDelete()

User.findOneAndDelete({username:"rachit"}).
  then((res) => {
    console.log(res);
  })

//-------------------------------------------------
// lec-02 hamera connect function jo h wo asynchronous func h to iss liye hum iss
// me async await use kar te h
