//one to many,large (refrencing)


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



// ! step one make order schema and insert data in it

const orderschema = new mongoose.Schema({
    item: String,
    price: Number,
})

const Order = mongoose.model("Order", orderschema);
/*
const addorder=async ()=>{
    let res=await Order.insertMany([
        {item:"samosa",price:12},
        {item:"chips",price:10},
        {item:"chocklet",price:20},
    ])
    console.log(res);
}
addorder();
*/

//! step 2 make customer schema and add data to it by using (type,ref)

/*
type: mongoose.Schema.Types.ObjectId → field stores MongoDB document IDs,
ref: "Order" → tells Mongoose which model those IDs belong to.
*/

// 12_relation_in_mongoose\images\start1image.png
//12_relation_in_mongoose\images\start2image.png
//12_relation_in_mongoose/images/start3image.png


const customerschema = new mongoose.Schema(
    {
        name: String,
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order",
            }
        ]
    }
)

const Customer=mongoose.model("Customer",customerschema);

let addcustomer=async ()=>{
    //! made customer doc added name 
    let customer1=new Customer({
        name:"rohit",
    })
    //! now to add the orders we push all the orders (not just the id)
    //^ even if we push the whole order obj only the id of it will be stored in the customer doc as we specified in the customerSchema to take object only

    //now first if find the id of our orders to push them
    let order1=await Order.findOne({item:"samosa"});
    let order2=await Order.findOne({item:"chips"});
    let order3=await Order.findOne({item:"chocklet"});

    customer1.orders.push(order1);
    customer1.orders.push(order2);
    customer1.orders.push(order3);
    let res=await customer1.save();
    console.log(res);

}
addcustomer();




// ✅ Export models & function
module.exports = { Order, Customer };