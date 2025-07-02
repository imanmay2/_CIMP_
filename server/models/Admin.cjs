const mongoose=require("mongoose");

const admins=new mongoose.Schema({
    admin_id:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
     name:{
        type:String,
        required:true
    },
     address:{
        type:String,
    },
    role:{
        type:String,
        required:true
    },
});

const Admin=new mongoose.model("Admin",admins);

module.exports=Admin;