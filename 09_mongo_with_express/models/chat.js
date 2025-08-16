// in this we create the schema for chat 

//but first we have to require the mongoose to use it

const mongoose=require('mongoose');

const chatchema=mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        maxLength:50,
    },
    created_at:{
        type:Date,
        required:true,
    },
});

const Chat=mongoose.model("Chat",chatchema);

module.exports = Chat;