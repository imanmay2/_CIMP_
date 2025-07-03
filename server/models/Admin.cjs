const mongoose=require("mongoose");

const admins=new mongoose.Schema({
   
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Admin=new mongoose.model("Admin",admins);

module.exports=Admin;