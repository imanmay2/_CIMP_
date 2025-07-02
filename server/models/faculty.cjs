const mongoose=require("mongoose");

const faculties=new mongoose.Schema({
    faculty_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    }
     name:{
        type:String,
        required:true
    },
     address:{
        type:String,
        required:true
    },
     club:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    }
});

const Faculty=new mongoose.model("Faculty",faculties);
module.exports=Faculty;