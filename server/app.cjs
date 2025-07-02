//imports
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require("cookie-parser");


//initialize
const Admin=require("./models/Admin.cjs");
const Club=require("./models/clubs.cjs");
const Faculty=require("./models/faculty.cjs");
const Student=require("./models/students.cjs");


const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
};


//middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


//functions
function checkEmailValidation(email) {
    if (email.includes('@')) {
        let arr = email.split('@');
        if (arr[arr.length - 1] == "gmail.com") {
            return true;
        }
    }
    return false;
}

function generateUsername(email) {
    return email.split('@')[0];
}


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/CIMP');
    console.log("Database Connected !");
}

app.listen(PORT, (req, res) => {
    console.log("Server is listening to " + PORT);
});


app.get("/getData",(req,res)=>{
    console.log("Database hitted");
    res.json({message:"Hello From Backend !! "});
});


// SignUp Route.
app.post("/signUp", async (req, res) => {
    const { Name, Email, Password,Role } = req.body;
    let userRes1 = await Admin.find({ email:Email});
    let userRes2 = await Student.find({ email:Email });
    let userRes3 = await Faculty.find({ email:Email });
    let userRes=userRes1 || userRes2 || userRes3  || [];
    if (!userRes.length) {
        try {
            console.log(req.body);
            let hashPass = "";
            let emailValidation = checkEmailValidation(Email);
            console.log(emailValidation);
            if (emailValidation == true) {
                hashPass = await bcrypt.hash(Password, saltRounds);   //Encryption of the password.
                if(Role==="Admin")
                    /// yet to be done
                // const user1 = new ({
                //     name: Name,
                //     email: Email,
                //     password: hashPass,
                //     role:Role,
                // });
                // await user1.save();

                //cookies
                // res.cookie("login", "true", { secure: false });
                // res.cookie("username", userName, { secure: false });
                // res.cookie("name", Name, { secure: false });  // secure false as using http. not https.
                console.log("User Signed Up!!");
                flag = 1;
                res.status(200).json({ 'message': "User saved successfully", "flag": "success" });
            } else {
                res.json({ 'message': 'Email is Invalid ! ', "flag": "error" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ 'message': "Error in pushing the data. ", "flag": "error" });
        }
    } else {
        res.json({ 'message': 'User already exists ! ' });
    }
});



//login route.
app.post("/login", async (req, res) => {
    let flag = 0;
    const { Email, Password } = req.body;
    let userRes1 = await Admin.find({ email:Email});
    let userRes2 = await Student.find({ email:Email });
    let userRes3 = await Faculty.find({ email:Email });
    let userRes=userRes1 || userRes2 || userRes3 || [];
    if (userRes.length){
        let hashPass = userRes[0].password;
        console.log(hashPass);
        bcrypt.compare(Password, hashPass, function (err, result) {
            if (result) {
                flag = 1;
                res.json({ "message": "User Logged in Successfully", "flag": "success",role:userRes[0].role });
            } else {
                res.json({ "message": "Password is incorrect ! ", "flag": "error" });
            }
        });
    } else {
        res.json({ "message": "Email is incorrect ! ", "flag": "error"});
    }
});
