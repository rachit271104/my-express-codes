//one to squillions
//for theory see copy notes

const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connected with data_base ")
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const userschema=new mongoose.Schema({
    username:String,
    email:String,
});

const postschema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }
})

const User=mongoose.model("User",userschema);
const Post=mongoose.model("Post",postschema);

const adddata=async ()=>{
    let user1=new User({
        username:"rachit",
        email:"r@gmail.com",
    })

    let post1=new Post({
        content:"new_post_of_cricket",
        likes:9900,
        //user given below
    })
    post1.user=user1;

    let post2=new Post({
        content:"new_post_of_cars",
        likes:8888,
        //user given below
    })
    post2.user=user1;

    await user1.save();
    await post1.save();
    await post2.save();
}
adddata();//func call

const getdata=async ()=>{  // printing the child with parent inside it
    let res=await Post.findOne({}).populate("user");
    console.log(res); 
}
getdata();