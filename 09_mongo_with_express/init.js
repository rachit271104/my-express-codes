// we created this file to have some dummy data for our db

const mongoose = require('mongoose');
const Chat=require("./models/chat.js") // importing chat schema

main()   
  .then((res) => {
    console.log("connected with data_base ")
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatwithme');
}


let chats=[
     {
    from: "rohit",
    to: "rachit",
    msg: "bol bhai",
    created_at: new Date(),
  },
  {
    from: "rachit",
    to: "rohit",
    msg: "sab badiya, tu bata",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "rachit",
    msg: "college ka project ho gaya?",
    created_at: new Date(),
  },
  {
    from: "rachit",
    to: "rohit",
    msg: "haan bas thoda bacha hai",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "rachit",
    msg: "chalo milte hain kal",
    created_at: new Date(),
  },
  {
    from: "rachit",
    to: "rohit",
    msg: "theek hai, 5 baje cafe?",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "rachit",
    msg: "haan perfect",
    created_at: new Date(),
  },
  {
    from: "rachit",
    to: "rohit",
    msg: "btw notes bhej dena",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "rachit",
    msg: "haan bhai, raat ko bhejta hu",
    created_at: new Date(),
  },
  {
    from: "rachit",
    to: "rohit",
    msg: "ok thanks",
    created_at: new Date(),
  }
]

Chat.insertMany(chats);

