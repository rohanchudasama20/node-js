// const express=require('express');
// const router=express.Router();

// const users=[];
// //route calling

// router.post('/signup',(req,res)=>{
//     const{email,password}=req.body;

//     const existinguser=users.find(user=>user.email===email);
//     if(existinguser){
//         return res.status(409).json({
//             messsage:"user is already exist"
//         });
//     }

//     const newuser={email,password};
//     users.push(newuser);

//     return res.status(201).json({
//         message:"sign up succesfull",
//         users:newuser
//     });
// });

// module.exports = router;



const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

const users = [];

// Signup route with validation
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const existinguser = users.find((user) => user.email === email);
    if (existinguser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const newuser = { email, password };
    users.push(newuser);

    return res.status(201).json({
      message: "Signup successful",
      user: newuser,
    });
  }
);

module.exports = router;
