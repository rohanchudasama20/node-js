const express=require('express');
const router=express.Router();

const users=[];
//route calling

router.post('/signup',(req,res)=>{
    const{email,password}=req.body;

    const existinguser=users.find(user=>user.email===email);
    if(existinguser){
        return res.status(409).json({
            messsage:"user is already exist"
        });
    }

    const newuser={email,password};
    users.push(newuser);

    return res.status(201).json({
        message:"sign up succesfull",
        users:newuser
    });
});

module.exports = router;