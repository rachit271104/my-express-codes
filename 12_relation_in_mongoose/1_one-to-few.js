//in this we write a example of one to few (less then 1000);

const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connected with data_base ")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

//defining schema

const userschema = new mongoose.Schema({
    username: String,
    address: [
        {
            location: String,
            city: String,
        }
    ]
})

const User = mongoose.model("User", userschema);

const adduser = async () => {
    let user1 = new User({
        username: "rachit",
        address: [
            {
                location: "221b 448g",
                city: "bhopal",
            },
            {
                location:"932d 953d",
                city:"delhi",
            }
        ]
    })

   let result= await user1.save();
   console.log(result);
};

adduser(); //called adduser

