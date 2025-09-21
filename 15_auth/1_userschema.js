// here we make user schema 

const mongoose= require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose'); // 1) require it

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
    //! (NOTE) passpoer-local-mongoose adds username to every schema 
})  // username will always we unique

//2) using plugin
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);