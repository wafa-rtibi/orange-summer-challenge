const mongoose=require('mongoose')
const bcrypt = require("bcrypt");

const UserModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/, // regExp for valid email
        "please provide a valid email",
      ]},
      password: {
        type: String,
        required:true,
        minlength: 6,
        select: false,
      },
      role: {
        type:String,
        enum:["USER", "MANAGER"],
        default:"USER"
      },
      image:{
        type:String
      }
    },
  
  { timestamps: true }
);
   UserModel.pre("save", async function (next) {
     // le mot clé function est tres importante
     if (!this.isModified("password")) {
       next();
     }
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
     next();
   });
   // matching password
   UserModel.methods.matchPassword = async function (password) {
     return await bcrypt.compare(password, this.password);
   };



module.exports=mongoose.model("users", UserModel)