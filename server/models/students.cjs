const mongoose=require("mongoose");

const students=new mongoose.Schema({
    regNo:{
        type:String,
        required:true
    },
     name:{
        type:String,
        required:true
    },
     address:{
        type:String,
        required:true
    },
     branch:{
        type:String,
        required:true
    },
});

const Student=new mongoose.model("Student",students);
module.exports=Student;