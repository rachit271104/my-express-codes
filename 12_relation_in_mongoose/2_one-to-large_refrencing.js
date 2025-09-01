//one to many,large (refrencing)

const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connected with data_base ")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const orderschema = new mongoose.Schema({
    item: String,
    price: Number,
})

const Order= mongoose.model("order",orderschema);

const addorder=async ()=>{
    let res=await Order.insertMany([
        {item:"samosa",price:12},
        {item:"chips",price:10},
        {item:"chocklet",price:20},
    ])
    console.log(res);
}
addorder();