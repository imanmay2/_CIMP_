const mongoose=require("mongoose");

const faculties=new mongoose.Schema({
    faculty_id:{
        type:String,
        required:true
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
     club:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
});

const Faculty=new mongoose.model("Faculty",faculties);
module.exports=Faculty;