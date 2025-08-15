// in this file we learn about updation and error in schema validation

// so when we define some conditions while defining schema,
//and when we update the values then those conditions dont applay to it at that time 
//so to applay these conditions se use // {runValidators:true} //in update function
// it takes the conditions from the schema and applay them in update func
//so no condition gets validated


const mongoose = require('mongoose');

main()  
  .then((res) => {
    console.log("connection success ")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
    maxLength:20,
  },
  author:{
    type:String,
  },
  price:{
    type:Number,
    min:[1,"value too low for amazon product"],
  },
  catagory:{
    type:String,
    enum:["fiction","non-fiction"], // array m jo values pass ki h unn m se hi kuch hona chaiye other wise we ger error
  },
  hashtags:[String], //to store a array
})

const Book=mongoose.model("Book",bookSchema);

let book1=new Book({
  title:"comic book",
  author:"stan lee",
  price:300,
  catagory:'fiction',
  hashtags:["superhero",'kids','marvel'],
});

 book1.save().then((res)=>{console.log(res)});

 Book.findByIdAndUpdate("689e1ffb566a8edaa79d2ff2",{price:-100},{runValidators:true}) 
 .then((res)=>{                                                   //here used
  console.log(res);
 })
 .catch((err)=>{
  console.log(err.errors.price.properties.message);
 });

//  we can also give consum errors when a validation error occurs
//we can also see the error by catching it 
//eg-

const novelSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
    maxLength:20,
  },
  author:{
    type:String,
  },
  price:{
    type:Number,
    min:[1,"value too low for amazon product"], // this is how we give custom error
  },
  catagory:{
    type:String,
    enum:["fiction","non-fiction"], 
  },
  hashtags:[String], 
})

//
const Novel=mongoose.model("Novel",bookSchema);

let novel1=new Novel({
  title:"gone girl",
  author:"leeeee",
  price:300,
  catagory:'fiction',
});

 novel1.save().then((res)=>{console.log(res)});
//


//getting the custom error
//eg-

 Book.findByIdAndUpdate("689e1ffb566a8edaa79d2ff2",{price:-100},{runValidators:true}) 
 .then((res)=>{                                                   
  console.log(res);
 })
 .catch((err)=>{
  console.log(err.errors.price.properties.message);
 })           //this is how we write it
