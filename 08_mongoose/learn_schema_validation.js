// in this file we learn about schema validation
// by taking a eg of amazon books section 

const mongoose = require('mongoose');

main()  
  .then((res) => {
    console.log("connection success ")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// there are 2 ways to write schema
/* 

1. the short cut way
const userschema = new mongoose.Schema({
  username: String,
  email: String,  // we write data types and they are case sensetive 
  age: Number,     // so first letter capital
}) 

 
*/

// 2. we use it when we have to pass multiple constrains

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
    min:1,
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


// now we learn about types of validations (constrains)

/*
required: boolean or function, if true adds a required validator for this property
default: sets a default value for the path
select: boolean, specifies default projections for queries
validate: function, adds a validator function for this property
get: function, defines a custom getter for this property using Object.defineProperty().
set: function, defines a custom setter for this property using Object.defineProperty().
alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
immutable: (once the value is added in db then u cannot update it )boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent document has isNew: true.
transform: function, Mongoose calls this function when you call Document#toJSON() function, including when you JSON.stringify() a document.
*/


const copySchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
  },
  discount:{
    type:Number,
    default:0, // sets the default value as 0 for discount
  },

})

const Copy=mongoose.model("Copy",copySchema);

// let copy1=new Copy({
//   title:"copy1",
//   price:100,
//   // we would not pass discount here but we will get discount as 0
// })

// copy1.save().then((res)=>{console.log(res)});



/*
String
lowercase: boolean, whether to always call .toLowerCase() on the value
uppercase: boolean, whether to always call .toUpperCase() on the value
trim: boolean, whether to always call .trim() on the value
match: RegExp, creates a validator that checks if the value matches the given regular expression
enum: Array, creates a validator that checks if the value is in the given array.
minLength: Number, creates a validator that checks if the value length is not less than the given number
maxLength: Number, creates a validator that checks if the value length is not greater than the given number
populate: Object, sets default populate options

Number
min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
populate: Object, sets default populate options

Date
min: Date, creates a validator that checks if the value is greater than or equal to the given minimum.
max: Date, creates a validator that checks if the value is less than or equal to the given maximum.
expires: Number or String, creates a TTL index with the value expressed in seconds.

ObjectId
populate: Object, sets default populate options
*/