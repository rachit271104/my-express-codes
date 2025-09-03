// in this we learn a populate example


//taking all the data from the file 2_one-to-large

/*
what we are doing here is that in our referencing one to many we had document in which we 
had orders obj_id so what populate method does is that it
! replaces the orders obj_id by the orders document 
* these changes are ont parmanent these are just we used fint find()
like we used select withh conditions in mysql
*/
//importing the data file
const { Customer,Order } = require('./2_one-to-large_refrencing');

// made connection
const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connected with data_base ")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

//will give error here but if we paste only this much part in 2_one-to-large then it will work
let findcustomer=async ()=>{
    let result =await Customer.find({}).populate("orders");
    console.log(result);
}
findcustomer();