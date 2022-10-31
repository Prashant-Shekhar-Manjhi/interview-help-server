const User = require('./../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRE_IN
    })
}

exports.signUp = async (req, res)=>{
    try{
        const newUser = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            confirmPassword:req.body.confirmPassword
        });

        const token = jwtToken(newUser._id);

        res.status(201).json({
            message:"success",
            data:{
                user:{...newUser._doc, token}
            }
        })
    }catch(err){
        res.status(501).json({
            message:"failure",
            error: err
        })
    }
    
}

exports.logIn = async (req, res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(404).json({
            status:"failure",
            message:"Provide email and password!"
        })
    }
    else{
        try{
            const user = await User.findOne({email});
            const token = jwtToken(user._id);
            const correct = await bcrypt.compare(password, user.password);

            if(!user || !correct){
                res.status(400).json({
                    status:"Failure",
                    message:"Invalid email or password"
                })
            }else{
                res.status(200).json({
                    status:"Success",
                    data : {
                       user :{...user._doc, token}
                    }
                })
            }
           
        }catch(err){
            res.status(404).json({
                status:"Failure",
                message:"Invalid email or password"
            })
        }
    }
}